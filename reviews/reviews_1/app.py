from flask import *

app = Flask(__name__)

# -------------------- RUTAS --------------------------------

#Pagina principal
@app.route('/')
def index():
    return render_template('index.html')

#Inicio de sesión
@app.route('/login')
def login():
    username = request.form.get('username')
    return render_template('login.html')

#menu clientes
@app.route('/user_reviews')
def user_reviews():
    username = "usuario"
    title = "test"
    review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis tincidunt est, eget ornare lorem. Donec faucibus, nibh fringilla tempor semper, enim mauris imperdiet erat, et varius ex nunc ut tortor. Phasellus a orci luctus, luctus neque nec, accumsan tortor. Duis nec augue finibus, elementum dui sed, dictum mi. Praesent tempus sit amet magna in dignissim. Vestibulum iaculis turpis sit amet pharetra egestas. In hac habitasse platea dictumst. Aliquam sed molestie sem, sed egestas odio. Donec vitae sagittis nisi, finibus tempor leo. In hendrerit rhoncus elit, ac bibendum tellus sagittis nec. Donec ac dapibus elit, quis varius orci. Vivamus at neque tortor. "
    return render_template('user_reviews.html',username=username,title=title,review=review)

@app.route('/movie_reviews')
def movie_reviews():
    title = "test"
    review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis tincidunt est, eget ornare lorem. Donec faucibus, nibh fringilla tempor semper, enim mauris imperdiet erat, et varius ex nunc ut tortor. Phasellus a orci luctus, luctus neque nec, accumsan tortor. Duis nec augue finibus, elementum dui sed, dictum mi. Praesent tempus sit amet magna in dignissim. Vestibulum iaculis turpis sit amet pharetra egestas. In hac habitasse platea dictumst. Aliquam sed molestie sem, sed egestas odio. Donec vitae sagittis nisi, finibus tempor leo. In hendrerit rhoncus elit, ac bibendum tellus sagittis nec. Donec ac dapibus elit, quis varius orci. Vivamus at neque tortor. "
    return render_template('movie_reviews.html',title=title,review=review)

@app.route('/create',methods=['POST'])
def create():
    return render_template('create.html')

if __name__ == '__main__':
  app.run(debug=True)
