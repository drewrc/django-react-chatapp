from django.urls import path
#from . import views 
from . import views

#from dj_rest_auth.registration.views import RegisterView


urlpatterns = [
    #http://localhost:8000/api_v1/chatrooms/
    path('chatrooms/', views.ChatroomListCreateAPIView.as_view()),
    path('chatrooms/<int:pk>/', views.ChatroomDetailAPIView.as_view()),

    #http://localhost:8000/api_v1/users/
    path('users/', views.UserListAPIView.as_view()),

    #http://localhost:8000/api_v1/messages/
    # path('messages/', views.MessageListAPIView.as_view()),
    path('messages/<int:pk>/', views.MessageDetailAPIView.as_view()),

    path('messages/chatroom/<int:room>/', views.MessageListAPIView.as_view()),

]