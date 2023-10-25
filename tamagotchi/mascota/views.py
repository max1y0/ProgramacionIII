from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import tamagotchi
from django.contrib.auth.views import LoginView

# Create your views here.

def mascota (request):
    if request.user.is_authenticated:
        username = request.user.username
        datos = tamagotchi.objects.filter(nombre=username).values()[0]
        return render(request, 'mascota.html', {
            'nombre': datos['nombre'],
        })
    else: 
        return render(request,"404")

def alimentar_mascota(request):
    mascota = tamagotchi.objects.get(nombre="maxis")
    mascota.hambre += 20
    if (mascota.hambre > 100):
        mascota.hambre = 100
    mascota.diversion -=5
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
