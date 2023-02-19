from django.urls import path
from . import views 


#http://127.0.0.1:8000/api_v1/chatrooms/register/

urlpatterns = [
    path('', views.ChatroomListAPIView.as_view()),
    path('users/', views.UserListAPIView.as_view()),
    path('register/', views.RegisterView.as_view()),
     path('login/', views.LoginView.as_view()),
]