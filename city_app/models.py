from django.db import models

# Create your models here.
class CityInfo(models.Model):
    class Meta:
        db_table = 'city_info'
    city = models.CharField(null=True, blank=True, max_length=255)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    status = models.CharField(null=True, blank=True, max_length=255)
    color = models.CharField(null=True, blank=True, max_length=7)

