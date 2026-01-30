import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Star, Truck, Shield, Leaf } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { categories } from '@/data/categories';
import { getBestSellers, getNewProducts } from '@/data/products';
import { getTopReviews } from '@/data/reviews';

const Index = () => {
  const bestSellers = getBestSellers().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 4);
  const topReviews = getTopReviews(4);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        </div>
        
        <div className="luxury-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">مجموعة ربيع 2024</span>
            </div>
            
            <h1 className="luxury-heading text-5xl md:text-6xl lg:text-7xl leading-tight">
              اكتشفي
              <span className="block text-primary">إشراقتك الطبيعية</span>
            </h1>
            
            <p className="luxury-subheading max-w-lg">
              منتجات فاخرة مصممة بعناية لتمنحك بشرة مشرقة وجمالاً يدوم. اكتشفي سر الجمال الطبيعي.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="luxury-button">
                تسوقي الآن
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link to="/beauty-guide" className="luxury-button-outline">
                دليل الجمال
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800"
                alt="Lumière Beauty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-card rounded-xl shadow-card">
              <p className="text-3xl font-display font-semibold text-primary">+50K</p>
              <p className="text-sm text-muted-foreground">عميلة سعيدة</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="luxury-heading text-3xl md:text-4xl mb-4">تسوقي حسب الفئة</h2>
            <div className="luxury-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="group block text-center"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-soft">
                    <img
                      src={category.image}
                      alt={category.name_ar}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
                      <span className="text-3xl mb-2">{category.icon}</span>
                      <h3 className="font-semibold text-lg">{category.name_ar}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-secondary/20">
        <div className="luxury-container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="luxury-heading text-3xl md:text-4xl mb-4">الأكثر مبيعاً</h2>
              <p className="text-muted-foreground">منتجات أحبتها عميلاتنا</p>
            </div>
            <Link to="/shop?bestseller=true" className="text-primary hover:underline flex items-center gap-2">
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Collection Banner */}
      <section className="py-20">
        <div className="luxury-container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-l from-primary/20 to-accent/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-16">
              <div className="space-y-6">
                <span className="text-primary text-sm font-medium">وصل حديثاً</span>
                <h2 className="luxury-heading text-3xl md:text-4xl">
                  مجموعة الإشراق الجديدة
                </h2>
                <p className="text-muted-foreground">
                  اكتشفي أحدث منتجاتنا المصممة خصيصاً لمنحك بشرة مشرقة ونضرة طوال اليوم.
                </p>
                <Link to="/shop?new=true" className="luxury-button inline-flex">
                  اكتشفي المجموعة
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {newProducts.slice(0, 4).map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="aspect-square rounded-xl overflow-hidden hover-lift"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name_ar}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lumière */}
      <section className="py-20 bg-secondary/20">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="luxury-heading text-3xl md:text-4xl mb-4">لماذا Lumière؟</h2>
            <div className="luxury-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'مكونات طبيعية', desc: 'نستخدم أفضل المكونات الطبيعية والآمنة' },
              { icon: Shield, title: 'مختبرة طبياً', desc: 'جميع منتجاتنا مختبرة من قبل أطباء الجلدية' },
              { icon: Sparkles, title: 'خالية من القسوة', desc: 'لا نختبر على الحيوانات أبداً' },
              { icon: Truck, title: 'توصيل سريع', desc: 'نوصل لجميع مناطق المملكة' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="luxury-heading text-3xl md:text-4xl mb-4">آراء عميلاتنا</h2>
            <div className="luxury-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card p-6 space-y-4"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-border'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">{review.comment}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-medium text-sm">{review.customerName}</p>
                  {review.verified && (
                    <p className="text-xs text-primary">✓ مشترية موثقة</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="luxury-container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="luxury-heading text-3xl md:text-4xl">انضمي لعائلة Lumière</h2>
            <p className="text-muted-foreground">
              اشتركي في نشرتنا البريدية واحصلي على خصم 15% على طلبك الأول
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-6 py-3 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="luxury-button whitespace-nowrap">
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
