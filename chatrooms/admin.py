from django.contrib import admin

# Register your models here.
from .models import Chatroom, User, Message

# Register your models here.
admin.site.register(Chatroom)
#admin.site.register(User)
admin.site.register(Message)