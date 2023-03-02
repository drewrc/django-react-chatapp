from rest_framework import generics
from .models import Message, Chatroom
from .serializers import UserSerializer, MessageSerializer, ChatroomSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .permissions import IsMessageAuthor
#, UserSerializer, 
# from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth import authenticate, login
# from django.http import JsonResponse
# from django.views import View


class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ChatroomListCreateAPIView(generics.ListCreateAPIView):
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
    
    def perform_create(self, serializer):
        room_id = self.kwargs.get('room')
        chatroom = Chatroom.objects.get(pk=room_id)
        serializer.save(room=chatroom)
        
class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = (IsMessageAuthor,)

