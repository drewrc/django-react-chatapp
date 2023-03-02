from rest_framework import serializers

from .models import Message, Chatroom
from django.contrib.auth.models import User


class ChatroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ('__all__')

class MessageSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    def get_username(self, obj):
        if obj.user:
            return obj.user.get_username()
        else:
            return None

    class Meta:
        model = Message
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')