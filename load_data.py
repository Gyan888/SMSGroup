import pydash
import json
import os
import sys
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "SMSGroup.settings")
import django
django.setup()
from city_app.models import CityInfo
from datetime import datetime
from pytz import utc
file = open('data.json', 'r')
data = json.loads(file.read())

for item in data:
    item['start_date'] = datetime.strptime(item['start_date'], "%m/%d/%Y").replace(tzinfo=utc)
    item['end_date'] = datetime.strptime(item['end_date'], "%m/%d/%Y").replace(tzinfo=utc)
    CityInfo.objects.update_or_creat(**item)


