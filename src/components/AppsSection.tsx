import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Tv, Monitor } from "lucide-react"

export const AppsSection = () => {
  const features = [
    "Ativação em minutos",
    "Compatível com Android, TVs, Roku, Fire Stick, etc",
    "Suporte aos principais apps IPTV",
    "Atendimento rápido via WhatsApp",
    "Pagamento 100% seguro"
  ]

  const plans = [
    { quantity: "3", price: "R$ 55,00" },
    { quantity: "5", price: "R$ 75,00" },
    { quantity: "6", price: "R$ 90,00" },
    { quantity: "10", price: "R$ 145,00" },
    { quantity: "30", price: "R$ 428,00" },
    { quantity: "100", price: "R$ 1.350,00" },
    { quantity: "300", price: "R$ 3.750,00" }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-glass border-primary/20 shadow-glow">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                <Smartphone className="w-8 h-8" />
                📲 Ativação de Aplicativos IPTV
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Realize agora a ativação de <span className="text-accent font-semibold">aplicativos de IPTV</span> para{' '}
                <span className="text-accent font-semibold">Android</span>,{' '}
                <span className="text-accent font-semibold">TVs Smart</span>,{' '}
                <span className="text-accent font-semibold">TV Box</span>,{' '}
                <span className="text-accent font-semibold">Roku</span>,{' '}
                <span className="text-accent font-semibold">Fire Stick</span> e muito mais! 
                Serviço rápido, seguro e com suporte especializado.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  variant="neon"
                  onClick={() => window.open('https://ativegood.com.br', '_blank')}
                  className="flex items-center gap-2"
                >
                  <Monitor className="w-5 h-5" />
                  👉 Ativar Agora
                </Button>
              </div>
            </div>

            <div className="border-t border-primary/20 pt-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-2">
                <Tv className="w-6 h-6" />
                💼 Planos de Revenda de Ativações
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left p-4 text-primary font-semibold">Quantidade</th>
                      <th className="text-left p-4 text-primary font-semibold">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((plan, index) => (
                      <tr key={index} className="border-b border-border/10 hover:bg-primary/5 transition-colors">
                        <td className="p-4 text-foreground font-medium">{plan.quantity}</td>
                        <td className="p-4 text-accent font-semibold">{plan.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="text-center mt-8">
                <Button
                  size="lg"
                  variant="default"
                  onClick={() => window.open('https://cadastro-revenda.bubbleapps.io/version-test?code=1741474083941x423443353552014140', '_blank')}
                >
                  💼 Tornar-se Revendedor
                </Button>
                
                <p className="text-muted-foreground text-sm mt-4 max-w-2xl mx-auto">
                  Com os planos de revenda, você poderá ativar diversos aplicativos de IPTV para seus clientes com total autonomia e preços especiais.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}