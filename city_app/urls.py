from django.urls import path
from .views import CityGetView

app_name = 'city_app'

urlpatterns = [
    path('', CityGetView.as_view(), name ='city-get-data')
]