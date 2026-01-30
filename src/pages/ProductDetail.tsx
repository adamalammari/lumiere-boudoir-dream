import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, Heart, ShoppingBag, Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { useStore } from '@/store/useStore';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const { addToCart, addToWishlist, isInWishlist } = useStore();

  if (!product) return <div className="min-h-screen flex items-center justify-center">المنتج غير موجود</div>;

  const relatedProducts = getProductsByCategory(product.categorySlug).filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    toast.success('تمت الإضافة إلى السلة');
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="luxury-container py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/20">
              <img src={product.images[selectedImage]} alt={product.name_ar} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="luxury-heading text-3xl">{product.name_ar}</h1>
              <p className="text-muted-foreground mt-2">{product.name_en}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-border'}`} />)}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewsCount} تقييم)</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold">{product.price} ر.س</span>
              {product.originalPrice && <span className="text-xl text-muted-foreground line-through">{product.originalPrice} ر.س</span>}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.badges.vegan && <span className="luxury-badge">🌱 نباتي</span>}
              {product.badges.crueltyFree && <span className="luxury-badge">🐰 خالي من القسوة</span>}
              {product.badges.tested && <span className="luxury-badge">👩‍⚕️ مختبر طبياً</span>}
            </div>

            {/* Colors */}
            {product.colorOptions && (
              <div className="space-y-2">
                <p className="font-medium">اللون:</p>
                <div className="flex gap-2">
                  {product.colorOptions.map(c => (
                    <button key={c.name} onClick={() => setSelectedColor(c.name)} className={`w-8 h-8 rounded-full border-2 ${selectedColor === c.name ? 'border-primary' : 'border-border'}`} style={{ backgroundColor: c.hex }} title={c.name} />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
              </div>
              <button onClick={handleAddToCart} className="flex-1 luxury-button">
                <ShoppingBag className="w-5 h-5" />
                أضيفي للسلة
              </button>
              <button onClick={() => { addToWishlist(product); toast.success('تمت الإضافة للمفضلة'); }} className={`p-3 border border-border rounded-lg ${isInWishlist(product.id) ? 'text-primary' : ''}`}>
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Benefits */}
            <div className="space-y-2 pt-6 border-t border-border">
              {product.benefits.map((b, i) => <p key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />{b}</p>)}
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="luxury-heading text-2xl mb-8">منتجات مشابهة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
