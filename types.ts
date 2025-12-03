export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Necklace' | 'Ring' | 'Earrings' | 'Bracelet';
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}