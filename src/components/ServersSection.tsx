import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"

export const ServersSection = () => {
  const servers = [
    "GoodPlay",
    "AUD SERVER", 
    "NewP2"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            💼 Revenda IPTV com Liberdade Total
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revenda IPTV com total liberdade e controle! Você terá acesso a <span className="text-accent font-semibold">3 servidores</span> para distribuir os clientes como quiser.
            A qualquer momento, poderá <span className="text-accent font-semibold">migrar clientes entre servidores</span>, apenas alterando a URL, sem complicações!
          </p>
          <p className="text-lg font-semibold text-emerald-400 mt-4">
            ✅ Créditos sem prazo de validade! Use quando quiser, sem expiração!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-glass border-primary/20 shadow-glow">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Zap className="w-6 h-6" />
                🌐 Servidores Disponíveis
              </h3>
              <p className="text-muted-foreground">
                Você pode alternar entre os servidores a qualquer momento, sem restrições!
              </p>
            </div>
            
            <div className="space-y-4">
              {servers.map((server, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20 border border-primary/10 hover:border-accent/30 transition-colors"
                >
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-foreground">
                    ✔️ {server}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}