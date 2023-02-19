from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

#creates a custom form, adding email to built in form in django 
class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')