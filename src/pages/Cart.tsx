import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useStore } from '@/store/useStore';
import { useState } from 'react';
import { validateCoupon, calculateDiscount, Coupon } from '@/data/coupons';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useStore();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  
  const subtotal = getCartTotal();
  const discount = appliedCoupon ? calculateDiscount(appliedCoupon, subtotal) : 0;
  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    const result = validateCoupon(couponCode, subtotal);
    if (result.valid && result.coupon) {
      setAppliedCoupon(result.coupon);
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background" dir="rtl">
        <Header />
        <div className="luxury-container py-20 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="luxury-heading text-2xl mb-4">سلتك فارغة</h1>
          <p className="text-muted-foreground mb-8">ابدئي التسوق واكتشفي منتجاتنا الفاخرة</p>
          <Link to="/shop" className="luxury-button">تسوقي الآن</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="luxury-container py-12">
        <h1 className="luxury-heading text-3xl mb-8">سلة التسوق</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.product.id} className="luxury-card p-4 flex gap-4">
                <img src={item.product.images[0]} alt={item.product.name_ar} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-medium">{item.product.name_ar}</h3>
                  <p className="text-sm text-muted-foreground">{item.product.size}</p>
                  <p className="font-semibold mt-1">{item.product.price} ر.س</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center border border-border rounded">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1"><Minus className="w-4 h-4" /></button>
                    <span className="px-3">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="luxury-card p-6 h-fit space-y-4">
            <h2 className="font-semibold text-lg">ملخص الطلب</h2>
            
            <div className="flex gap-2">
              <input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="كود الخصم" className="flex-1 luxury-input" />
              <button onClick={handleApplyCoupon} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">تطبيق</button>
            </div>
            
            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex justify-between"><span>المجموع الفرعي</span><span>{subtotal} ر.س</span></div>
              {appliedCoupon && <div className="flex justify-between text-primary"><span>الخصم</span><span>-{discount} ر.س</span></div>}
              <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border"><span>الإجمالي</span><span>{total} ر.س</span></div>
            </div>
            
            <Link to="/checkout" className="luxury-button w-full justify-center">إتمام الطلب</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
