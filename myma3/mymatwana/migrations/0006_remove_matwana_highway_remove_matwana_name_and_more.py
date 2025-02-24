# Generated by Django 5.0.1 on 2024-02-29 20:11

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mymatwana', '0005_alter_matwana_network'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='matwana',
            name='highway',
        ),
        migrations.RemoveField(
            model_name='matwana',
            name='name',
        ),
        migrations.RemoveField(
            model_name='matwana',
            name='network',
        ),
        migrations.RemoveField(
            model_name='matwana',
            name='operational_status',
        ),
        migrations.RemoveField(
            model_name='matwana',
            name='ref',
        ),
        migrations.AddField(
            model_name='matwana',
            name='layer',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='matwana',
            name='route_nams',
            field=models.CharField(max_length=109, null=True),
        ),
        migrations.AddField(
            model_name='matwana',
            name='stop_id',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='matwana',
            name='stop_lat',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='matwana',
            name='stop_lon',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='matwana',
            name='stop_name',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='matwana',
            name='geom',
            field=django.contrib.gis.db.models.fields.PointField(srid=4326),
        ),
        migrations.AlterField(
            model_name='matwana',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
