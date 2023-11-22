from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import tamagotchi
from django.contrib.auth.views import LoginView
from datetime import datetime, timedelta
from django.utils import timezone

# Create your views here.

def mascota (request):
    if request.user.is_authenticated:
        ahora = timezone.now()
        user = request.user.id
        mascota = tamagotchi.objects.get(user=user)

        # Calcular la diferencia de tiempo desde la última actualización
        ultima_actualizacion = mascota.ultima_actualizacion
        print(ultima_actualizacion)
        print(ahora)
        tiempo_transcurrido = (ahora) - (ultima_actualizacion)
        
        # Disminuir los atributos basados en el tiempo transcurrido (ajusta la lógica según tus necesidades)
        disminucion_salud = timedelta(seconds=10)
        disminucion_hambre = timedelta(seconds=15)
        disminucion_higiene = timedelta(seconds=20)

        if tiempo_transcurrido > disminucion_salud:
            mascota.salud -= 1
        if tiempo_transcurrido > disminucion_hambre:
            mascota.hambre -= 1
        if tiempo_transcurrido > disminucion_higiene:
            mascota.diversion -= 1
        mascota.save()
        return render(request,'mascota.html',{
            'nombre': mascota.nombre,
        })

    else: 
        return render(request,"404")

def alimentar_mascota(request):
    mascota = tamagotchi.objects.get(nombre="maxis")
    mascota.hambre += 20
    if (mascota.hambre > 100):
        mascota.hambre = 100
    mascota.diversion -=10
    mascota.salud -=5
    mascota.save()
    return redirect('/mascota')

def mimar_mascota(request):
    mascota = tamagotchi.objects.get(nombre="maxis")
    mascota.diversion += 10
    mascota.save()
    print('mimars')
    return redirect('/mascota')

def mimir_mascota(request):
    mascota = tamagotchi.objects.get(nombre="maxis")
    mascota.salud = 100
    mascota.diversion = 30
    mascota.hambre = 10
    mascota.save()
    print('mimir')
    return redirect('/mascota')

def stats (request):
    mascota = tamagotchi.objects.get(nombre="maxis")
    return render(request,'stats.html',{
        'nombre': mascota.nombre,
        'hambre': mascota.hambre,
        'salud': mascota.salud,
        'diversion': mascota.diversion,
    })
    # datos = tamagotchi.objects.filter(nombre="maxis").values()[0]
    # return render(request, 'stats.html', {
    #     'nombre': datos['nombre'],
    # })

class CustomLoginView(LoginView):
    template_name = 'login.html'
