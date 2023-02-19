from rest_framework import generics
from .models import User, Chatroom
from .serializers import ChatroomSerializer, UserSerializer
from django.contrib.auth.forms import UserCreationForm, authenticate
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views import View

#from django.shortcuts import get_object_or_404

class ChatroomListAPIView(generics.ListCreateAPIView):
    queryset = Chatroom.objects.all()
    serializer_class = ChatroomSerializer

class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RegisterView(View):
    def get(self, request):
        #create new instance of built-in UserCreationForm;
        form = UserCreationForm()
        return JsonResponse({'form': form.as_table()})

    def post(self, request):
        form = UserCreationForm(request.POST)
        #if form is valid -> save and send JSON response w/
        #success key set to True
        #.is_valid() and .save() are built in methods
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            #JSON response: errors key set to the form errors and a status code of 400
            #form.errors is an attribute of a Django form instance that contains 
            # a dictionary of errors that occurred
            return JsonResponse({'errors': form.errors}, status=400)

class LoginView(View):
    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)