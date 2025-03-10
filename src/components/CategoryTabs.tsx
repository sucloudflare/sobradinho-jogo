import React from 'react';

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({ selectedCategory, onSelectCategory }: CategoryTabsProps) {
  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'tradicionais', name: 'Tradicionais' },
    { id: 'especiais', name: 'Especiais' },
    { id: 'doces', name: 'Doces' },
    { id: 'bebidas', name: 'Bebidas' },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            selectedCategory === category.id
              ? 'bg-red-500 text-white'
              : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}