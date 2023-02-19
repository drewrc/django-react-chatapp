from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Chatroom(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)


    def __str__(self):
        return self.title

class User(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
    
class Message(models.Model):
    #user = models.CASCADE to ensure that when a user is deleted, all of their messages are also deleted
    #use 'User' from django authentication 
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text