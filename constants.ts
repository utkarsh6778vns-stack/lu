import { Product, Testimonial } from './types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Aurora Halo",
    price: 3450,
    category: "Ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "A stunning 2-carat diamond set in 18k white gold with a halo of sapphires."
  },
  {
    id: 2,
    name: "Golden Serpent Choker",
    price: 1200,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted Italian gold seamlessly woven into a fluid, serpentine form."
  },
  {
    id: 3,
    name: "Emerald Drop Earrings",
    price: 2800,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Vintage-inspired Colombian emeralds suspended in rose gold filigree."
  },
  {
    id: 4,
    name: "Obsidian Cuff",
    price: 850,
    category: "Bracelet",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    description: "A bold statement piece featuring polished obsidian and matte black accents."
  },
  {
    id: 5,
    name: "Sapphire Eternity Band",
    price: 1950,
    category: "Ring",
    image: "https://images.unsplash.com/photo-1603561289423-68f5d7d6f594?auto=format&fit=crop&w=800&q=80",
    description: "Deep blue sapphires channel-set in platinum, representing eternal loyalty."
  },
  {
    id: 6,
    name: "Pearl & Gold Lariat",
    price: 980,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Freshwater pearls spaced along a delicate gold chain for a modern classic look."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Verified Buyer",
    text: "The craftsmanship is simply divine. It feels weightless yet substantial.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Anniversary Gift",
    text: "She was speechless. The packaging alone was worth the purchase.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Sophia Li",
    role: "Collector",
    text: "Lustree has become my go-to for statement pieces. Absolutely stunning.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "James Sterling",
    role: "Engagement",
    text: "The AI stylist helped me find the perfect ring. She said yes immediately!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Isabella Rossi",
    role: "Frequent Shopper",
    text: "Elegance redefined. I wear my Lustree necklace every single day.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];