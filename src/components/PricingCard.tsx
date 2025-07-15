import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  icon: string
  price: string
  credits: string
  unitPrice: string
  buyUrl: string
  featured?: boolean
}

export const PricingCard = ({ 
  title, 
  icon, 
  price, 
  credits, 
  unitPrice, 
  buyUrl, 
  featured = false 
}: PricingCardProps) => {
  return (
    <Card className={`
      relative group transition-all duration-500 hover:scale-105 
      ${featured 
        ? 'bg-gradient-primary border-accent shadow-glow animate-pulse-glow' 
        : 'bg-card/80 backdrop-blur-glass border-primary/20 hover:border-accent/50'
      }
      hover:shadow-neon
    `}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-neon">
            🔥 MAIS POPULAR
          </div>
        </div>
      )}
      
      <CardContent className="p-6 text-center">
        <div className="mb-4">
          <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-primary-foreground' : 'text-primary'}`}>
            {icon} {title}
          </h3>
        </div>
        
        <div className="mb-6">
          <div className={`text-4xl font-bold mb-2 ${featured ? 'text-primary-foreground' : 'text-foreground'}`}>
            {price}
          </div>
          <div className={`text-lg ${featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            {credits}
          </div>
          <div className="text-emerald-400 font-semibold mt-2">
            ✅ {unitPrice}
          </div>
        </div>
        
        <Button 
          className="w-full" 
          variant={featured ? "cyber" : "default"}
          size="lg"
          onClick={() => window.open(buyUrl, '_blank')}
        >
          Comprar Agora
        </Button>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
      </CardContent>
    </Card>
  )
}