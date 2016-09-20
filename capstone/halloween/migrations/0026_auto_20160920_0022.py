# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-20 00:22
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('halloween', '0025_auto_20160919_2007'),
    ]

    operations = [
        migrations.AlterField(
            model_name='boo',
            name='costume',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='boos', to='halloween.Costume'),
        ),
        migrations.AlterField(
            model_name='boo',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='boos', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='costume',
            name='datecreated',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
        migrations.AlterField(
            model_name='costumeelement',
            name='costume',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='costumeelements', to='halloween.Costume'),
        ),
        migrations.AlterField(
            model_name='costumeelement',
            name='element',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='costumeelements', to='halloween.Element'),
        ),
    ]