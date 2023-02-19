from django.urls import path
#from . import views 
from . import views

#from dj_rest_auth.registration.views import RegisterView



#http://127.0.0.1:8000/api_v1/chatrooms/register/

urlpatterns = [
    path('chatrooms/', views.ChatroomListAPIView.as_view()),
    path('chatrooms/<int:pk>/', views.ChatroomDetailAPIView.as_view()),
    path('users/', views.UserListAPIView.as_view()),
    path('users/<int:pk>/', views.UserDetailAPIView.as_view()),
    path('messages/', views.MessageListAPIView.as_view()),
    path('messages/<int:pk>/', views.MessageDetailAPIView.as_view()),
    path('register/', views.RegisterView.as_view()),
    path('login/', views.LoginView.as_view()),
]