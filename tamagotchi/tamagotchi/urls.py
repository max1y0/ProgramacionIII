"""
URL configuration for tamagotchi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mascota import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('mascota/', views.mascota),
    path('stats/', views.stats, name='stats'),
    path('mascota/alimentar/', views.alimentar_mascota, name='alimentar_mascota'),
    path('mascota/mimar/', views.mimar_mascota, name='mimar_mascota'),
    path('mascota/mimir/', views.mimir_mascota, name='mimir_mascota'),
    path('login/', views.CustomLoginView.as_view(), name='login'),
]
