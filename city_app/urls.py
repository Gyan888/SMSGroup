from django.urls import path
from .views import CityPostGetView, CityUpdateDeleteAPIView

app_name = 'city_app'

urlpatterns = [
    path('', CityPostGetView.as_view(), name ='city-get-set-data'),
    path('<int:app_id>/', CityUpdateDeleteAPIView.as_view(), name='city-put-delete-data'),
]