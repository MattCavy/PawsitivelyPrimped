import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const DEPOSIT_AMOUNT_CENTS = 2500; // $25 deposit, applied toward final service price

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Payments aren't configured yet. Add STRIPE_SECRET_KEY to your environment to enable deposit checkout.",
      },
      { status: 503 }
    );
  }

  const stripe = new Stripe(secretKey);

  const body = await req.json();
  const { ownerName, email, phone, petName, service, preferredDate, notes } = body ?? {};

  if (!ownerName || !email || !phone || !petName || !service || !preferredDate) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? req.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: DEPOSIT_AMOUNT_CENTS,
          product_data: {
            name: `Booking Deposit — ${service}`,
            description: `Holds your appointment for ${petName}. Applied toward the final grooming price.`,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      ownerName,
      phone,
      petName,
      service,
      preferredDate,
      notes: notes ?? "",
    },
    success_url: `${origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/booking/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
