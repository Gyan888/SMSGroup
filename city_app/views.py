from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.db.models import Q
from .serializers import CitySerializer
from .pagination import CustomPagination
from .models import CityInfo

# Create your views here.

class CityPostGetView(ListCreateAPIView):
    serializer_class = CitySerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        query_params = self.request.query_params.dict()
        query_params.pop('page')
        query_params = dict(filter(lambda x: x[1], query_params.items()))
        return CityInfo.objects.filter(Q(**query_params))


    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CityUpdateDeleteAPIView(APIView):

    def put(self, request, app_id):
        data = CityInfo.objects.filter(id=app_id)
        if data:
            try:
                data.update(**request.data)
                return Response(CitySerializer(data[0], context={'request': request}).data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)


    def delete(self, request, app_id):
        data = CityInfo.objects.filter(id=app_id)
        if data:
            data.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)