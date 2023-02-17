from django.urls import path, include

urlpatterns = [
    path('chatrooms/', include('chatrooms.urls')),
]