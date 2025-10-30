import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {

  const features = [
    {
      icon: 'Target',
      title: 'Aimbot',
      description: 'Точность 99.9% с настраиваемыми параметрами FOV и smooth aim'
    },
    {
      icon: 'Eye',
      title: 'ESP/Wallhack',
      description: 'Видение через стены, отображение HP, дистанции и имён игроков'
    },
    {
      icon: 'Zap',
      title: 'Triggerbot',
      description: 'Мгновенная реакция на цель в прицеле с настройкой задержки'
    },
    {
      icon: 'Shield',
      title: 'Anti-Recoil',
      description: 'Полное подавление отдачи для всех типов оружия'
    },
    {
      icon: 'Radar',
      title: 'Radar Hack',
      description: '2D/3D радар с отображением всех игроков на карте'
    },
    {
      icon: 'Lock',
      title: 'Bypass защиты',
      description: 'Защита от античита с автоматическими обновлениями'
    }
  ];

  const pricingPlans = [
    {
      name: 'День',
      price: '230₽',
      duration: '1 день',
      features: ['Все функции чита', 'Автообновления', 'Поддержка 24/7']
    },
    {
      name: 'Неделя',
      price: '650₽',
      duration: '7 дней',
      features: ['Все функции чита', 'Автообновления', 'Поддержка 24/7', 'Приоритетная поддержка'],
      popular: true
    },
    {
      name: 'Месяц',
      price: '1999₽',
      duration: '30 дней',
      features: ['Все функции чита', 'Автообновления', 'Поддержка 24/7', 'VIP поддержка', 'Бонусные конфиги']
    }
  ];

  const testimonials = [
    {
      name: 'DarkSlayer',
      rating: 5,
      text: 'Лучший чит! Использую уже месяц, ни одного бана. Aimbot работает идеально!'
    },
    {
      name: 'ProGamer228',
      rating: 5,
      text: 'ESP просто огонь, вижу всех через стены. Поддержка отвечает быстро, рекомендую!'
    },
    {
      name: 'xXx_Killer_xXx',
      rating: 5,
      text: 'Годный софт за свои деньги. Bypass работает стабильно, античит не палит.'
    }
  ];

  const handleBuyClick = () => {
    window.open('https://t.me/Ebashygeroinss', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-[#0d0816] to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTUsIDEzNSwgMjQ1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter glow-text">
                MAGIC CHEAT
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Твой путь к доминированию в игре
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                onClick={handleBuyClick}
                size="lg"
                className="group relative px-8 py-7 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300 neon-border overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon name="ShoppingCart" size={24} />
                  Купить ключ
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Возможности
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональные инструменты для максимального контроля
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Тарифы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выбери подходящий план и начни доминировать
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative p-8 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-105 animate-fade-in ${
                  plan.popular ? 'border-primary border-2 shadow-2xl shadow-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-4 py-1 rounded-full text-sm font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground">{plan.duration}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={handleBuyClick}
                    className={`w-full py-6 text-lg font-bold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent neon-border' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    Купить
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Отзывы игроков
              </h2>
              <p className="text-xl text-muted-foreground">
                Что говорят наши пользователи
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((review, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon name="User" size={20} className="text-white" />
                      </div>
                      <span className="font-bold">{review.name}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <h2 className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Готов начать?
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйся к тысячам игроков, использующих Magic Cheat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                onClick={handleBuyClick}
                size="lg"
                className="px-10 py-7 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300 neon-border"
              >
                <Icon name="Rocket" size={24} className="mr-2" />
                Купить сейчас
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;