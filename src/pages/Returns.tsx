import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { RotateCcw, Package, Clock, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Returns = () => {
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
              <RotateCcw className="w-10 h-10 text-primary" />
            </div>
            <h1 className="luxury-heading text-4xl md:text-5xl mb-4">سياسة الاسترجاع والاستبدال</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              رضاكِ هو أولويتنا. نقدم سياسة استرجاع مرنة وسهلة لضمان تجربة تسوق مريحة.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="luxury-container max-w-4xl">
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">14 يوم</h3>
              <p className="text-sm text-muted-foreground">مهلة الاسترجاع</p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">مجاني</h3>
              <p className="text-sm text-muted-foreground">استرجاع المنتجات التالفة</p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <RotateCcw className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">5-7 أيام</h3>
              <p className="text-sm text-muted-foreground">استرداد المبلغ</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold">المنتجات القابلة للاسترجاع</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>يمكنك استرجاع أو استبدال المنتجات في الحالات التالية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>المنتجات غير المفتوحة وفي عبوتها الأصلية</li>
                  <li>المنتجات التالفة أو المعيبة عند الاستلام</li>
                  <li>استلام منتج خاطئ غير مطابق للطلب</li>
                  <li>المنتجات التي لم تفتح ولم تستخدم</li>
                </ul>
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
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold">المنتجات غير القابلة للاسترجاع</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>لأسباب صحية وسلامة، لا نقبل استرجاع:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>المنتجات التي تم فتحها أو استخدامها</li>
                  <li>منتجات المكياج التي تم تجربتها (أحمر الشفاه، الماسكارا، إلخ)</li>
                  <li>العينات والهدايا المجانية</li>
                  <li>المنتجات المشتراة بخصم يزيد عن 50%</li>
                  <li>المنتجات بعد انتهاء مهلة الـ 14 يوم</li>
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
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">خطوات الاسترجاع</h2>
              </div>
              <div className="pr-13 space-y-6 text-muted-foreground leading-relaxed">
                <div className="grid gap-4">
                  {[
                    { step: 1, title: 'تقديم الطلب', desc: 'تواصلي معنا عبر البريد الإلكتروني أو الواتساب مع ذكر رقم الطلب وسبب الاسترجاع' },
                    { step: 2, title: 'موافقة الطلب', desc: 'سنراجع طلبك ونرد عليك خلال 24-48 ساعة' },
                    { step: 3, title: 'إرسال المنتج', desc: 'أرسلي المنتج في عبوته الأصلية مع فاتورة الشراء' },
                    { step: 4, title: 'استرداد المبلغ', desc: 'سيتم استرداد المبلغ خلال 5-7 أيام عمل بعد استلام المنتج' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 bg-secondary/30 rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">أسئلة شائعة</h2>
              </div>
              <div className="pr-13 space-y-4">
                <div className="p-4 bg-card rounded-xl border border-border/50">
                  <h4 className="font-medium mb-2">هل يمكنني استبدال المنتج بدلاً من استرجاعه؟</h4>
                  <p className="text-sm text-muted-foreground">نعم، يمكنك استبدال المنتج بمنتج آخر بنفس القيمة أو أعلى مع دفع الفرق.</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border/50">
                  <h4 className="font-medium mb-2">من يتحمل تكلفة شحن الاسترجاع؟</h4>
                  <p className="text-sm text-muted-foreground">إذا كان السبب عيب في المنتج أو خطأ منا، نتحمل تكلفة الشحن. في الحالات الأخرى، العميلة تتحمل التكلفة.</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border/50">
                  <h4 className="font-medium mb-2">كيف سأسترد المبلغ؟</h4>
                  <p className="text-sm text-muted-foreground">سيتم رد المبلغ بنفس طريقة الدفع الأصلية. للدفع عند الاستلام، سنحتاج بيانات حسابك البنكي.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-2xl text-center"
            >
              <h3 className="text-xl font-semibold mb-4">تحتاجين مساعدة؟</h3>
              <p className="text-muted-foreground mb-6">فريق خدمة العملاء متاح لمساعدتك من السبت إلى الخميس، 9 صباحاً - 9 مساءً</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:returns@lumiere.com" className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
                  returns@lumiere.com
                </a>
                <a href="tel:+966500000000" className="px-6 py-3 bg-card border border-border rounded-full hover:bg-secondary transition-colors">
                  +966 50 000 0000
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Returns;
