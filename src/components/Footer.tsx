import Link from "next/link";
import { PawPrint, MapPin, Phone, Mail } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { businessInfo } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-coral text-white">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold">Pawsitively Primped</span>
          </div>
          <p className="mt-3 text-sm text-cream/70">{businessInfo.tagline}.</p>
          <a
            href={`https://instagram.com/${businessInfo.instagramHandle}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition-colors hover:bg-coral"
          >
            <InstagramIcon className="h-4 w-4" /> @{businessInfo.instagramHandle}
          </a>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-sunny">Visit</h3>
          <div className="mt-3 flex items-start gap-2 text-sm text-cream/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
            <span>{businessInfo.address}</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-cream/80">
            <Phone className="h-4 w-4 shrink-0 text-coral" />
            <a href={`tel:${businessInfo.phone}`} className="hover:text-white">
              {businessInfo.phone}
            </a>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-cream/80">
            <Mail className="h-4 w-4 shrink-0 text-coral" />
            <a href={`mailto:${businessInfo.email}`} className="hover:text-white break-all">
              {businessInfo.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-sunny">Hours</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {businessInfo.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-cream/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-sunny">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link href="/services" className="hover:text-white">Services & Pricing</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/booking" className="hover:text-white">Book an Appointment</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
