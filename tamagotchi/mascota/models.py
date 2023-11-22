from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class tamagotchi (models.Model):
    nombre = models.CharField(max_length=50)
    salud = models.IntegerField()
    hambre = models.IntegerField()
    diversion = models.IntegerField()
    ultima_actualizacion = models.DateTimeField(auto_now=True)  # Agrega el campo para la última actualización
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
    	return self.nombre