import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Filter, X, ChevronDown, Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

export function Products() {
  const { category } = useParams<{ category?: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (category) {
      result = result.filter(product => product.category === category);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by price range
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(product => {
        const finalPrice = product.discount > 0 
          ? (product.price * (100 - product.discount)) / 100 
          : product.price;
          
        if (max) {
          return finalPrice >= min && finalPrice <= max;
        } else {
          return finalPrice >= min;
        }
      });
    }
    
    // Sort products
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          result.sort((a, b) => {
            const priceA = a.discount > 0 ? (a.price * (100 - a.discount)) / 100 : a.price;
            const priceB = b.discount > 0 ? (b.price * (100 - b.discount)) / 100 : b.price;
            return priceA - priceB;
          });
          break;
        case 'price-desc':
          result.sort((a, b) => {
            const priceA = a.discount > 0 ? (a.price * (100 - a.discount)) / 100 : a.price;
            const priceB = b.discount > 0 ? (b.price * (100 - b.discount)) / 100 : b.price;
            return priceB - priceA;
          });
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'discount':
          result.sort((a, b) => b.discount - a.discount);
          break;
        default:
          break;
      }
    }
    
    setFilteredProducts(result);
  }, [category, searchQuery, priceRange, sortBy]);
  
  const getCategoryName = () => {
    switch (category) {
      case 'dogs':
        return 'Cachorros';
      case 'cats':
        return 'Gatos';
      case 'birds':
        return 'Pássaros';
      case 'fish':
        return 'Peixes';
      case 'rodents':
        return 'Roedores';
      case 'food':
        return 'Rações';
      case 'toys':
        return 'Brinquedos';
      case 'collars':
        return 'Coleiras';
      default:
        return 'Todos os Produtos';
    }
  };
  
  return (
    <div className="space-y-8 pb-16">
      <section className="pt-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-100 text-primary-800 text-sm font-bold px-3 py-1 rounded-full mb-2">
              Produtos
            </span>
            <h1 className="text-4xl font-bubblegum text-gray-900 mb-4">
              {getCategoryName()}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre os melhores produtos para o seu pet com qualidade e preço justo
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
                <h2 className="font-bubblegum text-xl text-gray-900 mb-6">Filtros</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Preço</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="price" 
                          value="" 
                          checked={priceRange === ''} 
                          onChange={() => setPriceRange('')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Todos os preços</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="price" 
                          value="0-50" 
                          checked={priceRange === '0-50'} 
                          onChange={() => setPriceRange('0-50')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Até R$ 50</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="price" 
                          value="50-100" 
                          checked={priceRange === '50-100'} 
                          onChange={() => setPriceRange('50-100')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">R$ 50 - R$ 100</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="price" 
                          value="100-200" 
                          checked={priceRange === '100-200'} 
                          onChange={() => setPriceRange('100-200')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">R$ 100 - R$ 200</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="price" 
                          value="200-" 
                          checked={priceRange === '200-'} 
                          onChange={() => setPriceRange('200-')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Acima de R$ 200</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Ordenar por</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="sort" 
                          value="" 
                          checked={sortBy === ''} 
                          onChange={() => setSortBy('')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Relevância</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="sort" 
                          value="price-asc" 
                          checked={sortBy === 'price-asc'} 
                          onChange={() => setSortBy('price-asc')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Menor preço</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="sort" 
                          value="price-desc" 
                          checked={sortBy === 'price-desc'} 
                          onChange={() => setSortBy('price-desc')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Maior preço</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="sort" 
                          value="rating" 
                          checked={sortBy === 'rating'} 
                          onChange={() => setSortBy('rating')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Melhor avaliação</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="sort" 
                          value="discount" 
                          checked={sortBy === 'discount'} 
                          onChange={() => setSortBy('discount')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-gray-600">Maiores descontos</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              {/* Search and Mobile Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white shadow-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Filter size={20} />
                  <span>Filtros</span>
                </button>
              </div>
              
              {/* Mobile Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-white rounded-2xl shadow-lg p-6 mb-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bubblegum text-xl text-gray-900">Filtros</h2>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Preço</h3>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="price-mobile" 
                            value="" 
                            checked={priceRange === ''} 
                            onChange={() => setPriceRange('')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Todos os preços</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="price-mobile" 
                            value="0-50" 
                            checked={priceRange === '0-50'} 
                            onChange={() => setPriceRange('0-50')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Até R$ 50</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="price-mobile" 
                            value="50-100" 
                            checked={priceRange === '50-100'} 
                            onChange={() => setPriceRange('50-100')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">R$ 50 - R$ 100</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="price-mobile" 
                            value="100-200" 
                            checked={priceRange === '100-200'} 
                            onChange={() => setPriceRange('100-200')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">R$ 100 - R$ 200</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="price-mobile" 
                            value="200-" 
                            checked={priceRange === '200-'} 
                            onChange={() => setPriceRange('200-')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Acima de R$ 200</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Ordenar por</h3>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="sort-mobile" 
                            value="" 
                            checked={sortBy === ''} 
                            onChange={() => setSortBy('')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Relevância</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="sort-mobile" 
                            value="price-asc" 
                            checked={sortBy === 'price-asc'} 
                            onChange={() => setSortBy('price-asc')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Menor preço</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="sort-mobile" 
                            value="price-desc" 
                            checked={sortBy === 'price-desc'} 
                            onChange={() => setSortBy('price-desc')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Maior preço</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="sort-mobile" 
                            value="rating" 
                            checked={sortBy === 'rating'} 
                            onChange={() => setSortBy('rating')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Melhor avaliação</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="sort-mobile" 
                            value="discount" 
                            checked={sortBy === 'discount'} 
                            onChange={() => setSortBy('discount')}
                            className="text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-gray-600">Maiores descontos</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Results */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                </p>
                
                <div className="hidden sm:block lg:hidden relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white text-gray-900 pl-4 pr-10 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Ordenar por relevância</option>
                    <option value="price-asc">Menor preço</option>
                    <option value="price-desc">Maior preço</option>
                    <option value="rating">Melhor avaliação</option>
                    <option value="discount">Maiores descontos</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <h3 className="font-bubblegum text-2xl text-gray-900 mb-4">Nenhum produto encontrado</h3>
                  <p className="text-gray-600 mb-6">
                    Não encontramos produtos que correspondam aos filtros selecionados.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setPriceRange('');
                      setSortBy('');
                    }}
                    className="btn-primary"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}