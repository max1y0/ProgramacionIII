from comanda import Comanda

listaComandas = []

opcion = 0
while (opcion !=6):
    print('1- cargar comanda')
    print('2- eliminar comanda')
    print('3- modificar comanda')
    print('4- listar comanda')
    print('5- listar comandas con envío')
    print('6- salir')

    opcion = int(input())

    if (opcion == 1):
        # cargar
        comanda1 = Comanda( input("Que va a pedir? \n"),
                            input("A nombre de quien? \n"),
                            int(input ("Monto del pedido \n")),
                            True)
        print('Envío a domicilio?')
        envio = input()
        if (envio == 'si'):
            comanda1.envio = True
        else:
            comanda1.envio = False
        if comanda1.monto > 5000:
            comanda1.aplicarDescuento()
        listaComandas.append(comanda1)
    elif (opcion ==2):
        pass
    elif (opcion ==3):
        pass
    elif (opcion ==4):
        #listar
        for x in listaComandas:
            print('Pedido: ',x.descripcion)
            print('Cliente: ',x.apellido)
            print('Precio: ',x.monto)
            if (x.envio):
                print("con envio a domicilio")
            else:
                print('retira en local')
            print('\n')
    elif (opcion ==5):
        print("Comandas con envío: ")
        for x in listaComandas:
            if (x.envio):
                print('Pedido: ',x.descripcion)
                print('Cliente: ',x.apellido)
                print('Precio: ',x.monto)
                print('\n')
        pass
    elif (opcion ==6):
        pass


