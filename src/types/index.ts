import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  tags: string[];
}

export interface Pet {
  id: number;
  name: string;
  description: string;
  image: string;
  age: string;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  breed: string;
  location: string;
  status: 'available' | 'pending' | 'adopted';
  vaccinated: boolean;
  neutered: boolean;
  friendly: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
  petName?: string;
}