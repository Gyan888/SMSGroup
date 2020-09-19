from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import CitySerializer
from .models import CityInfo

# Create your views here.

class CityGetView(ListAPIView):
    serializer_class = CitySerializer

    def get_queryset(self):
        return CityInfo.objects.all()