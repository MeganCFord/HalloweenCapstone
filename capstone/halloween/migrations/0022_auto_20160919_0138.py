# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-19 01:38
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('halloween', '0021_auto_20160918_2030'),
    ]

    operations = [
        migrations.AlterField(
            model_name='costumeelement',
            name='costume',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='costume_elements', to='halloween.Costume'),
        ),
    ]