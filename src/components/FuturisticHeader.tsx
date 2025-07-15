import { Button } from "@/components/ui/button"
import { Play, Menu, Phone, MessageCircle } from "lucide-react"
import { useState } from "react"

export const FuturisticHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-glass border-b border-primary/20">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-gradient-primary p-2 rounded-full shadow-glow">
                <Play className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              XPLAY UI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('planos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('servidores')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servidores
            </button>
            <button
              onClick={() => scrollToSection('apps')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection('franqueado')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Franqueado
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+5547996758797', '_blank')}
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (47) 99675-8797
            </Button>
            <Button
              variant="neon"
              size="sm"
              onClick={() => window.open('https://web.whatsapp.com/send?phone=5547996758797&text=Ol%C3%A1%20tem%20alguma%20duvida%3F', '_blank')}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-glass border-b border-primary/20 shadow-depth">
            <nav className="container mx-auto px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('planos')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection('servidores')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Servidores
              </button>
              <button
                onClick={() => scrollToSection('apps')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Apps
              </button>
              <button
                onClick={() => scrollToSection('franqueado')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Franqueado
              </button>
              
              <div className="pt-4 border-t border-primary/20 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('tel:+5547996758797', '_blank')}
                  className="w-full flex items-center gap-2 justify-center"
                >
                  <Phone className="w-4 h-4" />
                  (47) 99675-8797
                </Button>
                <Button
                  variant="neon"
                  size="sm"
                  onClick={() => window.open('https://web.whatsapp.com/send?phone=5547996758797&text=Ol%C3%A1%20tem%20alguma%20duvida%3F', '_blank')}
                  className="w-full flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}