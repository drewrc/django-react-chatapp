# Generated by Django 4.1.7 on 2023-02-19 06:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chatrooms', '0002_rename_author_chatroom_name_remove_chatroom_title_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='user',
        ),
        migrations.DeleteModel(
            name='Chatroom',
        ),
        migrations.DeleteModel(
            name='Message',
        ),
    ]
