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

# ------------------------------- Menu productos  -------------------------------------------
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

@app.route('/modificar_productos', methods=['POST'])
def modificar_productos():
  #Obtengo el id que puso en el formulario
  ID_producto = request.form.get('ID')

  #Obtengo los campos modificados
  descripcion = request.form.get('descripcion')
  precio = request.form.get('precio')

  #Ejecuto el SQL para modificar
  query = 'UPDATE Producto SET descripcion = %s, precio = %s WHERE ID_Producto = %s'
  cursor.execute(query, (descripcion,precio,ID_producto))
  return redirect(url_for('productos'))
  

@app.route('/eliminar_productos', methods=['POST'])
def eliminar_productos():

  #Obtengo el id que puso en el formulario
  ID_producto = request.form.get('ID')

  #Hago la query en la base de datos para eliminar el producto de ese ID
  query = 'DELETE FROM Producto WHERE '+ID_producto+' = Producto.ID_Producto'
  cursor.execute(query)
  conexion.commit()
  return redirect(url_for('productos'))


if __name__ == '__main__':
  app.run(debug=True)
