from django.db import models
from django.conf import settings
# Create your models here.
class Chatroom(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)


    def __str__(self):
        return self.title

class User(models.Model):
    text = models.TextField()
    #need to create relationship w/ review and model
    #on_delete; remove the orphans 
    #if you delete user, reviews all get deleted as well 
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        #returns first 50 char from text 
        return self.text[:50]