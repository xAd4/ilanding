# Generated by Django 5.1.4 on 2024-12-26 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feature', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='featureitemcard',
            name='color',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
