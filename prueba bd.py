import mysql.connector

# Conexión a la base de datos
conexion = mysql.connector.connect(
	host="localhost",
	user="usuario",
	password="contraseña",
	database="nombre_base_de_datos"
)

cursor = conexion.cursor()



def alta_cliente(dni,nombre, apellido):
    query = "INSERT INTO Cliente (dni,nombre, apellido) VALUES (%s, %s, %s)"
    cursor.execute(query, (dni, nombre, apellido))
    conexion.commit()
    print("Cliente agregado con éxito")

def listar_clientes():
    query = "SELECT * FROM Cliente"
    cursor.execute(query)
    clientes = cursor.fetchall()
    if clientes:
        print("Listado de clientes:")
        for cliente in clientes:
            print("DNI:",cliente[0],
            	"Nombre:",cliente[1],
            	"Apellido:",{cliente[2]})
    else:
        print("No hay clientes en la base de datos")

# Ejemplos de uso
alta_cliente("45321123","Juan", "Pérez")

listar_clientes()

# Cierre de la conexión
conexion.close()

