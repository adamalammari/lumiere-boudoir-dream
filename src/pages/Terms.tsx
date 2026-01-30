import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, ShoppingCart, CreditCard, Truck, AlertCircle, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="luxury-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="luxury-heading text-4xl md:text-5xl mb-4">الشروط والأحكام</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا أو إجراء أي عملية شراء.
            </p>
            <p className="text-sm text-muted-foreground mt-4">آخر تحديث: يناير 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="luxury-container max-w-4xl">
          <div className="space-y-12">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">القبول بالشروط</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  باستخدامك لموقع Lumière Beauty أو إجراء أي عملية شراء، فإنك توافقين على الالتزام بهذه الشروط والأحكام. 
                  إذا كنتِ لا توافقين على أي من هذه الشروط، يرجى عدم استخدام الموقع.
                </p>
                <p>
                  نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم نشر التعديلات على هذه الصفحة. استمرارك في استخدام الموقع بعد أي تعديلات يعني قبولك للشروط المعدلة.
                </p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">الطلبات والمنتجات</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <ul className="list-disc pr-6 space-y-3">
                  <li>جميع الطلبات خاضعة للتوفر والقبول من قبلنا</li>
                  <li>نحتفظ بالحق في رفض أو إلغاء أي طلب لأي سبب</li>
                  <li>الأسعار المعروضة بالريال السعودي وتشمل ضريبة القيمة المضافة</li>
                  <li>قد تختلف الألوان الفعلية قليلاً عن الصور المعروضة</li>
                  <li>المنتجات مخصصة للاستخدام الشخصي وليس لإعادة البيع</li>
                  <li>الكميات محدودة وقد تنفد بعض المنتجات</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">الدفع والأسعار</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>نقبل طرق الدفع التالية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>بطاقات الائتمان (Visa, Mastercard, مدى)</li>
                  <li>Apple Pay</li>
                  <li>الدفع عند الاستلام (متاح في مناطق محددة)</li>
                  <li>التحويل البنكي</li>
                </ul>
                <p className="mt-4">
                  نحتفظ بالحق في تعديل الأسعار في أي وقت. الأسعار المطبقة هي تلك السارية وقت تأكيد الطلب.
                </p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">الشحن والتوصيل</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <ul className="list-disc pr-6 space-y-3">
                  <li>نوصل إلى جميع مناطق المملكة العربية السعودية</li>
                  <li>مدة التوصيل: 2-5 أيام عمل</li>
                  <li>الشحن مجاني للطلبات فوق 250 ر.س</li>
                  <li>رسوم الشحن للطلبات الأقل: 30 ر.س</li>
                  <li>أنتِ مسؤولة عن التأكد من صحة عنوان الشحن</li>
                  <li>في حال عدم استلام الطلب، يرجى التواصل معنا خلال 48 ساعة</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">إخلاء المسؤولية</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                  <p className="text-amber-800">
                    <strong>تنبيه:</strong> منتجاتنا مخصصة للاستخدام الخارجي فقط. يرجى إجراء اختبار حساسية قبل الاستخدام الأول. 
                    في حال حدوث أي تهيج، توقفي عن الاستخدام واستشيري الطبيب.
                  </p>
                </div>
                <p>
                  لا نتحمل المسؤولية عن أي ردود فعل تحسسية أو نتائج غير متوقعة من استخدام المنتجات. 
                  المعلومات المقدمة على الموقع هي للأغراض الإعلامية فقط ولا تعتبر نصيحة طبية.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
