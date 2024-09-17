from flask import *

import mysql.connector

# Conexión a la base de datos
conexion = mysql.connector.connect(
	host="localhost",
	user="root",
	password="root",
	database="proyecto_pedidos"
)
cursor = conexion.cursor()

app = Flask(__name__)

#página principal
@app.route('/')
def index():
  return render_template('index.html')


#menu pedidos
@app.route('/pedidos')
def pedidos():
  pass

#menu clientes
@app.route('/clientes')
def clientes():
  pass

#menu productos
@app.route('/productos')
def productos():
  query = "SELECT * FROM Producto"
  cursor.execute(query)
  productos = cursor.fetchall()
  return render_template('productos.html',productos=productos)

@app.route('/agregar_productos', methods=['POST'])
def agregar_productos():
  #Obtengo los datos del formulario
  descripcion = request.form.get('descripcion')
  precio = request.form.get('precio')

  #los agrego a la base de datos
  query = 'INSERT INTO Producto (descripcion, precio) VALUES (%s, %s)'
  cursor.execute(query, (descripcion,precio))
  conexion.commit()
  return redirect(url_for('productos'))

@app.route('/modificar_productos')
def modificar_productos():
  pass

@app.route('/eliminar_productos')
def eliminar_productos():
  pass


if __name__ == '__main__':
  app.run(debug=True)
