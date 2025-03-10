import { Category } from '../types';
import { Dog, Cat, Bird, Fish, Rabbit, DogBowl, Bone, Paw } from 'lucide-react';

export const animalCategories: Category[] = [
  {
    id: "dogs",
    name: "Cachorros",
    description: "Tudo para o seu melhor amigo",
    icon: Dog,
    href: "/products/dogs"
  },
  {
    id: "cats",
    name: "Gatos",
    description: "Produtos para seu felino",
    icon: Cat,
    href: "/products/cats"
  },
  {
    id: "birds",
    name: "Pássaros",
    description: "Alimentos e acessórios",
    icon: Bird,
    href: "/products/birds"
  },
  {
    id: "fish",
    name: "Peixes",
    description: "Aquários e alimentação",
    icon: Fish,
    href: "/products/fish"
  },
  {
    id: "rodents",
    name: "Roedores",
    description: "Produtos especializados",
    icon: Rabbit,
    href: "/products/rodents"
  }
];

export const productCategories: Category[] = [
  {
    id: "food",
    name: "Rações",
    description: "Alimentação balanceada",
    icon: DogBowl,
    href: "/products/food"
  },
  {
    id: "toys",
    name: "Brinquedos",
    description: "Diversão garantida",
    icon: Bone,
    href: "/products/toys"
  },
  {
    id: "collars",
    name: "Coleiras",
    description: "Segurança e estilo",
    icon: Paw,
    href: "/products/collars"
  }
];