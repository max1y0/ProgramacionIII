# Generated by Django 4.2.2 on 2023-11-22 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mascota', '0005_alter_tamagotchi_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='tamagotchi',
            name='ultima_actualizacion',
            field=models.DateTimeField(auto_now=True),
        ),
    ]