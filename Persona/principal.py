from persona import Persona

persona1 = Persona("Boomer","35989080",34)

print( "hola", persona1.nombre )
print( persona1.presentarse() )
print( persona1.añoNacimiento(2023) )

persona2 = Persona(	input("como te llamas"),
					input("dame tu dni"),
					int(input("que edad tenes")))

if (persona1.edad > persona2.edad):
	print("el mas joven es ", persona2.nombre)
else:
	print("el mas joven es ", persona1.nombre)
