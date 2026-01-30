import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    if (searchParams.get('new') === 'true') {
      filtered = filtered.filter(p => p.isNew);
    }
    if (searchParams.get('bestseller') === 'true') {
      filtered = filtered.filter(p => p.isBestSeller);
    }
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.categorySlug === selectedCategory);
    }
    
    switch (sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      default: filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    return filtered;
  }, [selectedCategory, sortBy, searchParams]);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="luxury-container py-12">
        <h1 className="luxury-heading text-3xl mb-8">جميع المنتجات</h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="luxury-input w-auto">
            <option value="all">جميع الفئات</option>
            {categories.map(c => <option key={c.slug} value={c.slug}>{c.name_ar}</option>)}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="luxury-input w-auto">
            <option value="newest">الأحدث</option>
            <option value="price-low">السعر: الأقل</option>
            <option value="price-high">السعر: الأعلى</option>
            <option value="rating">التقييم</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
