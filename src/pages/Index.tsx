import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Star, Truck, Shield, Leaf, Gift, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { categories } from '@/data/categories';
import { getBestSellers, getNewProducts } from '@/data/products';
import { getTopReviewsWithProducts } from '@/data/reviews';
import heroBanner from '@/assets/hero-banner.jpg';
import promoBanner from '@/assets/promo-banner-1.jpg';
import perfumePromo from '@/assets/perfume-promo.jpg';
import ingredientsPromo from '@/assets/ingredients-promo.jpg';
import offerBanner from '@/assets/offer-banner.jpg';

const Index = () => {
  const bestSellers = getBestSellers().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 4);
  const topReviews = getTopReviewsWithProducts(6);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Lumière Beauty Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="luxury-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pr-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">مجموعة ربيع 2024 الحصرية</span>
            </motion.div>
            
            <h1 className="luxury-heading text-5xl md:text-6xl lg:text-7xl leading-tight">
              اكتشفي
              <span className="block text-primary mt-2">إشراقتك الطبيعية</span>
            </h1>
            
            <p className="luxury-subheading max-w-lg text-lg">
              منتجات فاخرة مصممة بعناية فائقة لتمنحك بشرة مشرقة وجمالاً يدوم. اكتشفي سر الجمال الطبيعي مع Lumière.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="luxury-button text-base">
                تسوقي الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link to="/beauty-guide" className="luxury-button-outline text-base">
                دليل الجمال
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4 text-primary" />
                <span>شحن مجاني فوق 250 ر.س</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Gift className="w-4 h-4 text-primary" />
                <span>هدية مع كل طلب</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            {/* Stats Card */}
            <div className="absolute bottom-32 left-12 p-6 bg-card/95 backdrop-blur-sm rounded-2xl shadow-luxury border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div>
                  <p className="text-3xl font-display font-semibold text-foreground">4.9/5</p>
                  <p className="text-sm text-muted-foreground">من +50,000 تقييم</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="luxury-container">
          <div className="flex items-center justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              خصم 20% على طلبك الأول - كود: LUMIERE20
            </span>
            <span className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              توصيل سريع خلال 24-48 ساعة
            </span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-24">
        <div className="luxury-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium mb-3 block">اكتشفي مجموعاتنا</span>
            <h2 className="luxury-heading text-3xl md:text-4xl mb-4">تسوقي حسب الفئة</h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="group block text-center"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-card hover:shadow-hover transition-shadow duration-500">
                    <img
                      src={category.image}
                      alt={category.name_ar}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent group-hover:from-foreground/80 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-background">
                      <span className="text-3xl mb-2">{category.icon}</span>
                      <h3 className="font-semibold text-lg">{category.name_ar}</h3>
                      <span className="text-sm opacity-80">{category.productCount} منتج</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offer Banner with Image */}
      <section className="py-8">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img 
              src={offerBanner} 
              alt="عروض حصرية" 
              className="w-full h-[350px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="luxury-container w-full">
                <div className="max-w-lg space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30"
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">عرض حصري لفترة محدودة</span>
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-background">
                    وفّري حتى <span className="text-primary">40%</span>
                  </h2>
                  <p className="text-background/80 text-lg">
                    على مجموعة مختارة من منتجات العناية بالبشرة والمكياج الفاخر
                  </p>
                  
                  <Link 
                    to="/shop?sale=true" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    تسوقي العروض
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-secondary/30">
        <div className="luxury-container">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium mb-2 block">الأكثر طلباً</span>
              <h2 className="luxury-heading text-3xl md:text-4xl mb-2">منتجاتنا الأكثر مبيعاً</h2>
              <p className="text-muted-foreground">منتجات أحبتها عميلاتنا وحققت أعلى التقييمات</p>
            </motion.div>
            <Link to="/shop?bestseller=true" className="text-primary hover:underline flex items-center gap-2 font-medium">
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

      {/* Promotional Banner - Skincare */}
      <section className="py-16">
        <div className="luxury-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img src={promoBanner} alt="عروض العناية بالبشرة" className="w-full h-[400px] md:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 via-foreground/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="luxury-container">
                <div className="max-w-md mr-auto text-background space-y-6">
                  <span className="inline-block px-4 py-1.5 bg-background/20 backdrop-blur-sm rounded-full text-sm">
                    عرض محدود
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold">
                    خصم 30% على العناية بالبشرة
                  </h2>
                  <p className="text-background/80">
                    استمتعي بخصم حصري على جميع منتجات السيرومات والكريمات
                  </p>
                  <Link to="/category/skincare" className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-full hover:bg-background/90 transition-colors">
                    تسوقي الآن
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Collection */}
      <section className="py-24">
        <div className="luxury-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary text-sm font-medium">وصل حديثاً</span>
              <h2 className="luxury-heading text-3xl md:text-4xl">
                مجموعة الإشراق الجديدة
              </h2>
              <p className="text-muted-foreground text-lg">
                اكتشفي أحدث منتجاتنا المصممة خصيصاً لمنحك بشرة مشرقة ونضرة طوال اليوم. تركيبات متطورة بمكونات طبيعية فاخرة.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">✓</span>
                  مكونات طبيعية 100%
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">✓</span>
                  خالية من البارابين والكبريتات
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">✓</span>
                  نتائج مثبتة علمياً
                </li>
              </ul>
              <Link to="/shop?new=true" className="luxury-button inline-flex">
                اكتشفي المجموعة
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {newProducts.slice(0, 4).map((product, index) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className={`aspect-square rounded-2xl overflow-hidden hover-lift shadow-card ${index === 0 ? 'row-span-2' : ''}`}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name_ar}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfume Promo Banner */}
      <section className="py-16 bg-secondary/20">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img src={perfumePromo} alt="عطور فاخرة" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-8 text-background">
                <h3 className="text-2xl font-display font-semibold mb-2">عطور شرقية فاخرة</h3>
                <p className="text-background/80 mb-4">روائح أصيلة تدوم طويلاً</p>
                <Link to="/category/perfume" className="inline-flex items-center gap-2 text-sm hover:underline">
                  اكتشفي العطور
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img src={ingredientsPromo} alt="مكونات طبيعية" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-8 text-background">
                <h3 className="text-2xl font-display font-semibold mb-2">مكوناتنا الطبيعية</h3>
                <p className="text-background/80 mb-4">نختار الأفضل لبشرتك</p>
                <Link to="/ingredients" className="inline-flex items-center gap-2 text-sm hover:underline">
                  تعرفي على مكوناتنا
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Lumière */}
      <section className="py-24">
        <div className="luxury-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium mb-3 block">قيمنا</span>
            <h2 className="luxury-heading text-3xl md:text-4xl mb-4">لماذا تختارين Lumière؟</h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'مكونات طبيعية', desc: 'نستخدم أفضل المكونات الطبيعية والآمنة من مصادر موثوقة', color: 'bg-green-100 text-green-600' },
              { icon: Shield, title: 'مختبرة طبياً', desc: 'جميع منتجاتنا مختبرة ومعتمدة من أطباء الجلدية', color: 'bg-blue-100 text-blue-600' },
              { icon: Sparkles, title: 'خالية من القسوة', desc: 'نلتزم بعدم اختبار منتجاتنا على الحيوانات', color: 'bg-pink-100 text-pink-600' },
              { icon: Truck, title: 'توصيل سريع', desc: 'نوصل لجميع مناطق المملكة خلال 24-48 ساعة', color: 'bg-amber-100 text-amber-600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-shadow duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 ${item.color} rounded-2xl flex items-center justify-center`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
        <div className="luxury-container mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-primary text-sm font-medium mb-3 block">شهادات العميلات</span>
            <h2 className="luxury-heading text-3xl md:text-4xl mb-4">ماذا تقول عميلاتنا</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">أكثر من 50,000 عميلة سعيدة بتجربتهن معنا</p>
            <div className="luxury-divider mt-4" />
          </motion.div>
        </div>

        {/* First Row - RTL */}
        <div className="relative mb-6">
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-scroll-rtl gap-5">
            {[...topReviews, ...topReviews, ...topReviews].map((review, index) => (
              <div
                key={`row1-${review.id}-${index}`}
                className="w-[340px] md:w-[380px] flex-shrink-0 bg-card rounded-2xl overflow-hidden shadow-card border border-border/40 hover:shadow-hover transition-all duration-500 group"
              >
                {review.product && (
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={review.product.images[0]} 
                      alt={review.product.name_ar}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                    <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between">
                      <p className="text-background text-sm font-medium truncate">{review.product.name_ar}</p>
                      <span className="text-background/80 text-xs">{review.product.price} ر.س</span>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-primary text-primary' : 'text-border'}`} />
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-1.5 text-foreground">{review.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">{review.comment}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-border/40">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">{review.customerName.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-xs text-foreground">{review.customerName}</p>
                      {review.verified && (
                        <p className="text-[10px] text-primary flex items-center gap-0.5">
                          <Shield className="w-2.5 h-2.5" />
                          مشترية موثقة
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - LTR */}
        <div className="relative">
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-scroll-ltr gap-5">
            {[...topReviews.slice().reverse(), ...topReviews.slice().reverse(), ...topReviews.slice().reverse()].map((review, index) => (
              <div
                key={`row2-${review.id}-${index}`}
                className="w-[340px] md:w-[380px] flex-shrink-0 bg-card rounded-2xl overflow-hidden shadow-card border border-border/40 hover:shadow-hover transition-all duration-500 group"
              >
                {review.product && (
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={review.product.images[0]} 
                      alt={review.product.name_ar}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                    <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between">
                      <p className="text-background text-sm font-medium truncate">{review.product.name_ar}</p>
                      <span className="text-background/80 text-xs">{review.product.price} ر.س</span>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-primary text-primary' : 'text-border'}`} />
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-1.5 text-foreground">{review.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">{review.comment}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-border/40">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">{review.customerName.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-xs text-foreground">{review.customerName}</p>
                      {review.verified && (
                        <p className="text-[10px] text-primary flex items-center gap-0.5">
                          <Shield className="w-2.5 h-2.5" />
                          مشترية موثقة
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-b from-accent/30 to-background">
        <div className="luxury-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <span className="text-primary text-sm font-medium">انضمي إلينا</span>
            <h2 className="luxury-heading text-3xl md:text-4xl">كوني من عائلة Lumière</h2>
            <p className="text-muted-foreground text-lg">
              اشتركي في نشرتنا البريدية واحصلي على خصم 15% على طلبك الأول بالإضافة لآخر العروض والنصائح الجمالية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-6 py-4 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <button className="luxury-button whitespace-nowrap">
                اشتركي الآن
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              بالاشتراك، أنتِ توافقين على <Link to="/privacy" className="underline">سياسة الخصوصية</Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
