# Generated by Django 5.1.4 on 2024-12-24 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Your Name')),
                ('email', models.EmailField(max_length=250, verbose_name='Your Email')),
                ('subject', models.CharField(max_length=100, verbose_name='Subject')),
                ('message', models.TextField(verbose_name='Message')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
            ],
        ),
    ]
