import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success('تمت الإضافة إلى السلة');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('تمت الإزالة من المفضلة');
    } else {
      addToWishlist(product);
      toast.success('تمت الإضافة إلى المفضلة');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <div className="luxury-card overflow-hidden">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-secondary/20">
            <img
              src={product.images[0]}
              alt={product.name_ar}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Badges */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  جديد
                </span>
              )}
              {product.isBestSeller && (
                <span className="px-3 py-1 bg-foreground text-background text-xs rounded-full">
                  الأكثر مبيعاً
                </span>
              )}
              {product.originalPrice && (
                <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs rounded-full">
                  خصم
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className="absolute top-3 left-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background"
            >
              <Heart className={`w-4 h-4 ${inWishlist ? 'fill-primary text-primary' : 'text-foreground'}`} />
            </button>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-sm rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary"
            >
              <ShoppingBag className="w-4 h-4" />
              أضيفي للسلة
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-2">
            <p className="text-xs text-muted-foreground">{product.category}</p>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {product.name_ar}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({product.reviewsCount})</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 pt-1">
              <span className="font-semibold text-foreground">{product.price} ر.س</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {product.originalPrice} ر.س
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
