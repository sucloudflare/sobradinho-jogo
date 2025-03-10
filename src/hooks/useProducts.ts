import { useState, useEffect } from 'react';
import { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela, manjericão fresco',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
    category: 'tradicionais'
  },
  {
    id: 2,
    name: 'Pizza Pepperoni',
    description: 'Molho de tomate, mussarela, pepperoni',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
    category: 'tradicionais'
  },
  // Add more products as needed
];

export function useProducts() {
  const [products] = useState<Product[]>(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return {
    products: filteredProducts,
    loading,
    selectedCategory,
    setSelectedCategory
  };
}