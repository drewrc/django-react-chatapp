from rest_framework import generics
from .models import Message, Chatroom
from .serializers import UserSerializer, MessageSerializer, ChatroomSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
#, UserSerializer, 
# from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth import authenticate, login
# from django.http import JsonResponse
# from django.views import View


class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ChatroomListAPIView(generics.ListCreateAPIView):
    queryset = Chatroom.objects.all()
    serializer_class = ChatroomSerializer

class ChatroomDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chatroom.objects.all()
    serializer_class = ChatroomSerializer

# class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class MessageListAPIView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer
    def get_queryset(self):
        room = self.kwargs.get('room')  # get the room parameter from the URL
        queryset = Message.objects.filter(room=room)  # filter the queryset based on room
        return queryset

class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

