import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Gentleman's Beard Oil",
    description: "Premium blend of natural oils for impeccable beard care",
    price: 48.00,
    category: 'beard',
    image: "https://images.unsplash.com/photo-1627875777089-d32f1127e9ff?auto=format&fit=crop&q=80",
    popularity: 95
  },
  {
    id: 2,
    name: "Royal Shaving Cream",
    description: "Luxurious cream for the smoothest shaving experience",
    price: 35.00,
    category: 'shaving',
    image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&q=80",
    popularity: 88
  },
  {
    id: 3,
    name: "Heritage Cologne",
    description: "Timeless fragrance with sophisticated woody notes",
    price: 89.00,
    category: 'fragrance',
    image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?auto=format&fit=crop&q=80",
    popularity: 92
  }
];