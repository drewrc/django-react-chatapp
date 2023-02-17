from rest_framework import serializers

from .models import User, Chatroom

class ChatroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ('id', 'title', 'author', 'image',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model: User
        fields = ('__all__')