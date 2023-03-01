from django.db import models
# from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.

class Chatroom(models.Model):
    name = models.CharField(max_length=255)
    # members = models.ManyToManyField(User)

    def __str__(self):
        return self.name

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    room = models.ForeignKey(Chatroom, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.text
