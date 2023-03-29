class Persona:
	
   def __init__(self,nombre,dni,edad):
    	self.nombre = nombre
    	self.dni = dni
    	self.edad = edad

   def presentarse(self):
    	return self.nombre + " " + self.dni

   def añoNacimiento(self,anio):
    	return anio - self.edad