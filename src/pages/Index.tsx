import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showFreeKeyDialog, setShowFreeKeyDialog] = useState(false);

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

              <Button 
                onClick={() => setShowFreeKeyDialog(true)}
                size="lg"
                variant="outline"
                className="group px-8 py-7 text-lg font-bold border-2 border-secondary hover:bg-secondary/20 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Icon name="Gift" size={24} />
                  Получить ключ бесплатно
                </span>
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

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
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

      <Dialog open={showFreeKeyDialog} onOpenChange={setShowFreeKeyDialog}>
        <DialogContent className="sm:max-w-md bg-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Получить ключ бесплатно
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              Если хочешь получить ключ бесплатно, свяжись с нами в Telegram для получения подробностей о бесплатной версии.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-4">
            <Button 
              onClick={handleBuyClick}
              className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
