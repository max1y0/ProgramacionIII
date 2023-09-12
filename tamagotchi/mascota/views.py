from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import tamagotchi


# Create your views here.

def mascota (request):
    datos = tamagotchi.objects.filter(nombre="maxis").values()[0]
    return render(request, 'mascota.html', {
        'nombre': datos['nombre'],
    })

def alimentar_mascota(request):
    mascota = tamagotchi.objects.get(nombre="maxis")
    mascota.hambre += 50
    mascota.save()
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
