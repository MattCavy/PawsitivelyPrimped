export type Service = {
  name: string;
  duration: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "new-client",
    title: "New Client Services",
    description:
      "First time at Pawsitively Primped? Start here — these introductory appointments let us get to know your pet before setting up a regular maintenance schedule.",
    services: [
      { name: "New Client Small Dog Bath & Haircut", duration: "1 hr", price: "$80 & up" },
      { name: "New Client Medium/Large Dog Bath & Haircut", duration: "3 hrs", price: "$150 & up" },
      { name: "New Client Small Short Coated Dog Bath Service with De-Shedding", duration: "1 hr", price: "$40 & up" },
    ],
  },
  {
    id: "full-services",
    title: "Full Services",
    description:
      "Nose to tail: skin assessment, bath, coat conditioning, blow-dry, nail trim, oral care, ear cleaning, and gland expression.",
    services: [
      { name: "Bath & Maintenance Haircut — Small Dog", duration: "2 hrs", price: "$80 & up" },
      { name: "Bath & Maintenance Haircut — Medium/Large Dog", duration: "3 hrs", price: "$110 & up" },
      { name: "Special Attention Haircut — Small Dog", duration: "3 hrs", price: "$100 & up" },
      { name: "Special Attention Haircut — Medium/Large Dog", duration: "4 hrs", price: "$120 & up" },
      { name: "Bath — Small Short-Coated Dog", duration: "1 hr", price: "$40 & up" },
      { name: "Bath for Small/Medium Long Coated Breeds with Face & Sanitary Trim", duration: "1 hr 30 mins", price: "$55 & up" },
      { name: "Bath — Medium/Large Long Coated Breeds", duration: "2 hrs", price: "$85 & up" },
      { name: "Bath — Medium/Large Short-Coated Dog", duration: "2 hrs", price: "$70 & up" },
    ],
  },
  {
    id: "multi-pet",
    title: "Multiple Pet Households",
    description: "Two dogs groomed together in the same appointment.",
    services: [
      { name: "2 Small Dog Maintenance Haircuts", duration: "3 hrs", price: "$160 & up" },
      { name: "2 Medium/Large Dog Maintenance Haircuts", duration: "5 hrs", price: "$200 & up" },
      { name: "2 Baths for Small Long Coated Breeds with Face & Sanitary Trim", duration: "2 hrs", price: "$110 & up" },
      { name: "2 Medium/Large Short-Coated Dog Bath", duration: "3 hrs", price: "$150 & up" },
      { name: "2 Dog Bath for Small/Medium Shedding Breeds", duration: "2 hrs", price: "$80 & up" },
      { name: "2 Baths for Medium/Large Non-Shedding Breeds with Face & Sanitary Trim", duration: "1 hr 30 mins", price: "$110 & up" },
    ],
  },
  {
    id: "cats",
    title: "Cat Services",
    description: "Feline-friendly grooming for current clients.",
    services: [
      { name: "Cat Haircut", duration: "2 hrs", price: "$80 & up", note: "Current clients only" },
      { name: "Cat Bath", duration: "1 hr", price: "$50 & up", note: "Current clients only" },
      { name: "Cat Nail Trim", duration: "10 mins", price: "$10" },
      { name: "2 Individual Services for Cats", duration: "30 mins", price: "$25" },
      { name: "3 Individual Services for Cats", duration: "30 mins", price: "$25 & up" },
    ],
  },
  {
    id: "a-la-carte",
    title: "Stand-Alone Services",
    description: "Quick add-ons for pets who don't need a full groom.",
    services: [
      { name: "Small/Medium Dog Nail Trim", duration: "15 mins", price: "$15" },
      { name: "Medium/Large Dog Nail Trim", duration: "10 mins", price: "$20" },
      { name: "Gland Expression", duration: "15 mins", price: "$10 & up" },
      { name: "2 Individual Services (dogs)", duration: "30 mins", price: "$30 & up" },
      { name: "3 Individual Services (dogs)", duration: "30 mins", price: "$40 & up" },
      { name: "Small/Medium Dog Grooming Extender", duration: "15 mins", price: "$25 & up" },
      { name: "Medium/Large Dog Grooming Extender", duration: "25 mins", price: "$35 & up" },
    ],
  },
];

export const businessInfo = {
  name: "Pawsitively Primped",
  tagline: "Compassionate care for your cute companions",
  address: "3400 Mt Diablo Blvd, Lafayette, CA 94549",
  phone: "(925) 284-7757",
  email: "Questions@pawsitivelyprimped.com",
  owner: "Melissa Wright",
  hours: [
    { days: "Monday – Friday", time: "By appointment, from 8:30 AM" },
    { days: "Select Weekends", time: "By request" },
    { days: "Holidays", time: "Closed" },
  ],
  instagramHandle: "pawsitivelyprimped",
};
