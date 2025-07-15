import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface FranqueadoCardProps {
  title: string
  icon: string
  price: string
  credits: string
  description: string
  features: Array<{
    text: string
    included: boolean
  }>
  whatsappUrl: string
}

export const FranqueadoCard = ({ 
  title, 
  icon, 
  price, 
  credits, 
  description, 
  features, 
  whatsappUrl 
}: FranqueadoCardProps) => {
  return (
    <Card className="relative group transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-glass border-primary/20 hover:border-accent/50 hover:shadow-neon">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {icon} {title}
          </h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          
          <div className="mt-4">
            <div className="text-4xl font-bold text-foreground mb-2">
              {price}
            </div>
            <div className="text-lg text-muted-foreground">
              {credits}
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <X className="w-5 h-5 text-red-400" />
              )}
              <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full" 
          variant="default"
          size="lg"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          COMPRAR AGORA
        </Button>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
      </CardContent>
    </Card>
  )
}