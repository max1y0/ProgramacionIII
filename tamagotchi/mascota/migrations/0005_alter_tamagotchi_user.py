# Generated by Django 4.2.2 on 2023-08-17 14:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mascota', '0004_tamagotchi_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tamagotchi',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
