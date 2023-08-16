from django.shortcuts import render
from django.http import HttpResponse
from .models import tamagotchi


# Create your views here.

def mascota (request):
    datos = tamagotchi.objects.filter(nombre="maxis").values()[0]
    return render(request, 'mascota.html', {
        'nombre': datos['nombre']
    })