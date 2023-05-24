class Comanda:
    def __init__ (self,descripcion, apellido, monto, envio):
        self.descripcion = descripcion
        self.apellido = apellido
        self.monto = monto
        self.envio = envio
    
    def aplicarDescuento(self):
        if (self.envio == True):
            self.monto = self.monto * 0.95
        else:
            self.monto = self.monto * 0.9