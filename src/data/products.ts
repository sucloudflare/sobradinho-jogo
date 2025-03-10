import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Ração Premium para Cães Adultos",
    description: "Ração completa e balanceada para cães adultos de todas as raças. Rica em proteínas e nutrientes essenciais.",
    price: 129.90,
    discount: 15,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119",
    category: "food",
    rating: 4.8,
    reviews: 156,
    stock: 50,
    tags: ["ração", "cachorro", "adulto", "premium"]
  },
  {
    id: 2,
    name: "Ração Super Premium para Gatos",
    description: "Ração super premium para gatos adultos. Fórmula especial para pelagem brilhante e saúde digestiva.",
    price: 89.90,
    discount: 0,
    image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35",
    category: "food",
    rating: 4.9,
    reviews: 203,
    stock: 45,
    tags: ["ração", "gato", "adulto", "premium"]
  },
  {
    id: 3,
    name: "Brinquedo Interativo para Cães",
    description: "Brinquedo interativo que estimula a inteligência do seu cão. Ideal para evitar o tédio e ansiedade.",
    price: 59.90,
    discount: 10,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    category: "toys",
    rating: 4.6,
    reviews: 98,
    stock: 30,
    tags: ["brinquedo", "cachorro", "interativo"]
  },
  {
    id: 4,
    name: "Arranhador para Gatos com Catnip",
    description: "Arranhador vertical com catnip para seu gato se divertir e manter as unhas saudáveis.",
    price: 79.90,
    discount: 0,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f",
    category: "toys",
    rating: 4.7,
    reviews: 76,
    stock: 25,
    tags: ["brinquedo", "gato", "arranhador"]
  },
  {
    id: 5,
    name: "Coleira Ajustável com Identificação",
    description: "Coleira ajustável de nylon com placa de identificação personalizada. Disponível em várias cores.",
    price: 39.90,
    discount: 5,
    image: "https://images.unsplash.com/photo-1567612529009-afe25301b6d0",
    category: "collars",
    rating: 4.5,
    reviews: 112,
    stock: 60,
    tags: ["coleira", "cachorro", "identificação"]
  },
  {
    id: 6,
    name: "Guia Retrátil para Passeio",
    description: "Guia retrátil com 5 metros de comprimento. Ideal para passeios com seu cão.",
    price: 69.90,
    discount: 0,
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36",
    category: "collars",
    rating: 4.4,
    reviews: 87,
    stock: 40,
    tags: ["guia", "cachorro", "passeio"]
  },
  {
    id: 7,
    name: "Cama Ortopédica para Cães",
    description: "Cama ortopédica que alivia a pressão nas articulações. Ideal para cães idosos ou com problemas articulares.",
    price: 149.90,
    discount: 20,
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    category: "beds",
    rating: 4.9,
    reviews: 134,
    stock: 20,
    tags: ["cama", "cachorro", "ortopédica"]
  },
  {
    id: 8,
    name: "Ração para Filhotes de Cachorro",
    description: "Ração especial para filhotes com nutrientes essenciais para o desenvolvimento saudável.",
    price: 99.90,
    discount: 0,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd",
    category: "food",
    rating: 4.8,
    reviews: 178,
    stock: 55,
    tags: ["ração", "cachorro", "filhote"]
  }
];