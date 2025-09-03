import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Мес 1', revenue: 15, clients: 1000 },
  { month: 'Мес 3', revenue: 45, clients: 3000 },
  { month: 'Мес 6', revenue: 90, clients: 6000 },
  { month: 'Мес 9', revenue: 135, clients: 9000 },
  { month: 'Мес 12', revenue: 180, clients: 12000 },
];

const tariffData = [
  { name: 'Lite', value: 30, price: '1 500 ₽' },
  { name: 'Standard', value: 35, price: '3 500 ₽' },
  { name: 'Premium', value: 25, price: '5 500 ₽' },
  { name: 'Elite', value: 10, price: '8 000 ₽' },
];

const COLORS = ['#FF4500', '#FF6B35', '#FF8F65', '#FFB396'];

const investmentData = [
  { category: 'Разработка платформы', amount: 20 },
  { category: 'Маркетинг', amount: 15 },
  { category: 'Партнерская сеть', amount: 10 },
  { category: 'Операционные расходы', amount: 5 },
];

export default function Index() {
  const downloadFile = (filename: string) => {
    alert(`Для скачивания ${filename} разместите файлы в папке public/ проекта:\n\n1. Создайте папку public/downloads/\n2. Добавьте файлы:\n   - presentation.pdf (презентация)\n   - financial-model.xlsx (фин. модель)\n3. Файлы будут доступны по ссылкам:\n   - /downloads/presentation.pdf\n   - /downloads/financial-model.xlsx`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Safe Now
                </h1>
                <p className="text-xl lg:text-2xl text-orange-100">
                  Персональная безопасность как вызов такси
                </p>
              </div>
              
              <p className="text-lg text-orange-50 leading-relaxed">
                Мобильный сервис персональной безопасности, который делает охрану 
                такой же доступной, как вызов такси. Революционное решение для рынка 
                охранных услуг в 400+ млрд ₽.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
                  onClick={() => downloadFile('презентацию')}
                >
                  <Icon name="Download" className="mr-2" />
                  Скачать презентацию
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 font-semibold"
                  onClick={() => downloadFile('фин. модель')}
                >
                  <Icon name="FileSpreadsheet" className="mr-2" />
                  Фин. модель
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-orange-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">400+</div>
                  <div className="text-orange-100">млрд ₽ рынок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5-10</div>
                  <div className="text-orange-100">минут прибытие</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">12-18</div>
                  <div className="text-orange-100">мес. окупаемость</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/273d2bbf-2169-4b21-8165-f2ebeafa4ffb.png" 
                  alt="Safe Now App Interface" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-destructive text-white px-4 py-2 rounded-full font-semibold">
                  SOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-xl text-gray-600">Простой процесс за 4 шага</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "Smartphone", title: "Нажатие SOS", desc: "Жмешь кнопку SOS в приложении" },
              { icon: "AlertTriangle", title: "Сигнал тревоги", desc: "Автоматическая отправка сигнала тревоги" },
              { icon: "MapPin", title: "Распределение", desc: "Система находит ближайший ЧОП" },
              { icon: "Car", title: "Выезд группы", desc: "Прибытие экипажа за 5-10 минут" }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                    <Icon name={step.icon as any} size={24} />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Финансовые показатели</h2>
            <p className="text-xl text-gray-600">Прогнозы развития проекта Safe Now</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Icon name="TrendingUp" className="mr-2 text-primary" />
                  Рост выручки и клиентской базы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#1E3A8A" strokeWidth={3} name="Выручка (млн ₽)" />
                    <Line type="monotone" dataKey="clients" stroke="#FF0000" strokeWidth={3} name="Клиенты" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-600 mt-4">План первого года: 10,000 клиентов, выручка 180 млн ₽</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Icon name="PieChart" className="mr-2 text-primary" />
                  Распределение по тарифам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={tariffData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value, price }) => `${name} (${value}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {tariffData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {tariffData.map((tariff, index) => (
                    <div key={tariff.name} className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: COLORS[index] }}
                      ></div>
                      <span className="text-sm font-medium">{tariff.name}: {tariff.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Условия инвестирования</h2>
            <p className="text-xl text-gray-600">Требуемые инвестиции и их распределение</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 bg-gradient-to-br from-primary to-blue-600 text-white">
              <Icon name="DollarSign" size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">50-55 млн ₽</h3>
              <p className="text-lg text-blue-100">Требуемые инвестиции</p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <Icon name="Clock" size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">12-18 месяцев</h3>
              <p className="text-lg text-green-100">Возврат инвестиций</p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <Icon name="Target" size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">4+ млрд ₽</h3>
              <p className="text-lg text-purple-100">Потенциал рынка (1%)</p>
            </Card>
          </div>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-8">Распределение инвестиций</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={investmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} млн ₽`, 'Сумма']} />
                  <Bar dataKey="amount" fill="#FF4500" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Рыночная возможность</h2>
            <p className="text-xl text-slate-300">Safe Now становится первым игроком этого сегмента</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center text-4xl font-bold text-white">
                  <Icon name="TrendingUp" className="mr-4 text-green-400" size={40} />
                  400+ млрд ₽
                </div>
                <p className="text-xl text-slate-300">Размер рынка охранных услуг только в России</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-3xl font-bold text-green-400">
                  <Icon name="Target" className="mr-4" size={32} />
                  4 млрд ₽/год
                </div>
                <p className="text-lg text-slate-300">Потенциальная выручка при захвате 1% рынка</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-2xl font-bold text-blue-400">
                  <Icon name="Users" className="mr-4" size={28} />
                  Первый игрок
                </div>
                <p className="text-lg text-slate-300">Safe Now станет пионером в сегменте on-demand безопасности</p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Shield" className="mr-2 text-blue-400" />
                    Конкурентные преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-300">
                  <div className="flex items-start">
                    <Icon name="Check" className="mr-2 text-green-400 mt-1" size={16} />
                    <span>Первое решение типа "Uber для безопасности"</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" className="mr-2 text-green-400 mt-1" size={16} />
                    <span>Быстрое время отклика: 5-10 минут</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" className="mr-2 text-green-400 mt-1" size={16} />
                    <span>Партнерская сеть ЧОП по всей России</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" className="mr-2 text-green-400 mt-1" size={16} />
                    <span>Гибкая тарифная линейка</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Готовы инвестировать в будущее безопасности?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами для получения детальной презентации и обсуждения условий инвестирования
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-semibold"
              onClick={() => downloadFile('презентацию')}
            >
              <Icon name="Mail" className="mr-2" />
              Связаться с нами
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 font-semibold"
              onClick={() => downloadFile('фин. модель')}
            >
              <Icon name="Calendar" className="mr-2" />
              Запланировать встречу
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t">
            <div className="flex items-center justify-center">
              <Icon name="Mail" className="mr-2 text-primary" />
              <span className="text-gray-600">invest@safenow.ru</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Phone" className="mr-2 text-primary" />
              <span className="text-gray-600">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="MapPin" className="mr-2 text-primary" />
              <span className="text-gray-600">Москва, Россия</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}