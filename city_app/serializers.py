from rest_framework.serializers import ModelSerializer
from .models import CityInfo

class CitySerializer(ModelSerializer):
    class Meta:
        model = CityInfo
        fields = ['city', 'start_date', 'end_date', 'price', 'status', 'color']