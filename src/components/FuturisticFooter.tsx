export const FuturisticFooter = () => {
  return (
    <footer className="relative bg-gradient-to-br from-background via-secondary/20 to-primary/10 border-t border-primary/20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              IPTV Premium
            </h3>
            <p className="text-muted-foreground mt-2">
              Sua porta de entrada para o futuro do streaming
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="text-lg font-semibold text-foreground">
              📞 Contato: (47) 99675-8797
            </div>
            <div className="text-muted-foreground">
              📧 suporte@revendaiptv.com
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-primary/20">
            <p className="text-sm text-muted-foreground">
              © 2024 Revenda IPTV Premium - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-primary opacity-10 blur-3xl"></div>
    </footer>
  )
}