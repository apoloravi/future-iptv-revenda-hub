import { FuturisticHeader } from "@/components/FuturisticHeader"
import { FuturisticHero } from "@/components/FuturisticHero"
import { ServersSection } from "@/components/ServersSection"
import { PricingCard } from "@/components/PricingCard"
import { AppsSection } from "@/components/AppsSection"
import { FranqueadoCard } from "@/components/FranqueadoCard"
import { FuturisticFooter } from "@/components/FuturisticFooter"

const Index = () => {
  const pricingPlans = [
    {
      title: "Iniciante",
      icon: "🔥",
      price: "R$ 20,00",
      credits: "10 Créditos",
      unitPrice: "R$ 2,00 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Básico",
      icon: "🚀",
      price: "R$ 40,00",
      credits: "20 Créditos",
      unitPrice: "R$ 2,00 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Bronze",
      icon: "💎",
      price: "R$ 97,50",
      credits: "50 Créditos",
      unitPrice: "R$ 1,95 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7",
      featured: true
    },
    {
      title: "Prata",
      icon: "🥈",
      price: "R$ 190,00",
      credits: "100 Créditos",
      unitPrice: "R$ 1,90 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Ouro",
      icon: "🥇",
      price: "R$ 378,00",
      credits: "200 Créditos",
      unitPrice: "R$ 1,89 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Platinum",
      icon: "🏆",
      price: "R$ 752,00",
      credits: "400 Créditos",
      unitPrice: "R$ 1,88 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Empresarial",
      icon: "💼",
      price: "R$ 1.122,00",
      credits: "600 Créditos",
      unitPrice: "R$ 1,87 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Power",
      icon: "⚡",
      price: "R$ 1.860,00",
      credits: "1000 Créditos",
      unitPrice: "R$ 1,86 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Mega",
      icon: "🔥",
      price: "R$ 3.700,00",
      credits: "2000 Créditos",
      unitPrice: "R$ 1,85 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Ultra",
      icon: "🚀",
      price: "R$ 4.500,00",
      credits: "5000 Créditos",
      unitPrice: "R$ 0,90 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Supremo",
      icon: "💎",
      price: "R$ 5.100,00",
      credits: "10000 Créditos",
      unitPrice: "R$ 0,51 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Master",
      icon: "🏅",
      price: "R$ 7.500,00",
      credits: "15000 Créditos",
      unitPrice: "R$ 0,50 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Elite",
      icon: "🥇",
      price: "R$ 9.000,00",
      credits: "20000 Créditos",
      unitPrice: "R$ 0,45 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    },
    {
      title: "Infinity",
      icon: "👑",
      price: "R$ 20.000,00",
      credits: "50000 Créditos",
      unitPrice: "R$ 0,40 cada",
      buyUrl: "https://revenda.prov.top/#/rs/xl1jAR4WMj/rlKWO3Wzo7"
    }
  ]

  const franqueadoPlans = [
    {
      title: "Franqueado P3",
      icon: "💎",
      price: "R$ 500,00",
      credits: "50 - 1.000 Créditos",
      description: "Ideal para grandes revendedores",
      features: [
        { text: "Painel de Controle", included: true },
        { text: "Suporte Prioritário", included: true },
        { text: "Personalização de App Android e FireStick", included: true },
        { text: "Estatísticas Avançadas", included: true }
      ],
      whatsappUrl: "https://web.whatsapp.com/send?phone=5547996758797&text=Ol%C3%A1%20tem%20alguma%20duvida%3F"
    },
    {
      title: "Franqueado P2",
      icon: "📈",
      price: "R$ 600,00",
      credits: "10 - 1.500 Créditos",
      description: "Para revendedores intermediários",
      features: [
        { text: "Painel de Controle", included: true },
        { text: "Suporte Básico", included: true },
        { text: "Personalização de App Android e FireStick", included: false },
        { text: "Estatísticas de Vendas", included: true }
      ],
      whatsappUrl: "https://web.whatsapp.com/send?phone=5547996758797&text=Ol%C3%A1%20tem%20alguma%20duvida%3F"
    },
    {
      title: "Franqueado P1",
      icon: "🏅",
      price: "R$ 750,00",
      credits: "10 - 2.500 Créditos",
      description: "Para revendedores iniciantes",
      features: [
        { text: "Painel de Controle", included: true },
        { text: "Suporte Básico", included: true },
        { text: "Personalização de App Android e FireStick", included: false },
        { text: "Estatísticas de Vendas", included: true }
      ],
      whatsappUrl: "https://web.whatsapp.com/send?phone=5547996758797&text=Ol%C3%A1%20tem%20alguma%20duvida%3F"
    },
    {
      title: "Franqueado Ilimitado",
      icon: "🔥",
      price: "R$ 900,00",
      credits: "Créditos Ilimitados",
      description: "Para revendedores ilimitados",
      features: [
        { text: "Painel de Controle Personalizado", included: true },
        { text: "Personalização de App Android e FireStick", included: false },
        { text: "Suporte VIP", included: true },
        { text: "Estatísticas Avançadas", included: true }
      ],
      whatsappUrl: "https://web.whatsapp.com/send?phone=5547996758797&text=Ol%C3%A1%20tem%20alguma%20duvida%3F"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <FuturisticHeader />
      
      {/* Hero Section */}
      <FuturisticHero />
      
      {/* Servers Section */}
      <div id="servidores">
        <ServersSection />
      </div>
      
      {/* Pricing Plans */}
      <section id="planos" className="py-16 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              🚀 Planos de Revenda
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para começar sua jornada como revendedor de IPTV
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Apps Section */}
      <div id="apps">
        <AppsSection />
      </div>
      
      {/* Franqueado Section */}
      <section id="franqueado" className="py-16 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              💼 Franqueado Mensal - Revenda IPTV com Estabilidade!
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Os planos <span className="text-accent font-semibold">Franqueado Mensal</span> são ideais para revendedores que querem uma estrutura confiável e previsível.<br/>
              💰 <span className="text-accent font-semibold">Pague um valor fixo mensal e receba créditos automaticamente.</span><br/>
              🚀 <span className="text-accent font-semibold">A partir do plano Franqueado P3, você pode personalizar seu próprio aplicativo!</span><br/>
              🔧 <span className="text-accent font-semibold">Gerencie sua revenda com um painel completo e suporte dedicado.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {franqueadoPlans.map((plan, index) => (
              <FranqueadoCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <FuturisticFooter />
    </div>
  );
};

export default Index;
