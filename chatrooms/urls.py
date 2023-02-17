from rest_framework import generics
from .models import User
from .models import Chatroom
from .serializers import ChatroomSerializer, UserSerializer
from django.shortcuts import get_object_or_404

class ChatroomListAPIView(generics.ListCreateAPIView):
    queryset = Chatroom.objects.all()
    serializer_class = ChatroomSerializer

class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
