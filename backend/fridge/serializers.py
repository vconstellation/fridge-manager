from rest_framework import serializers
from .models import FridgeItem
from datetime import datetime

class FridgeItemSerializer(serializers.ModelSerializer):

    time_until_expired = serializers.SerializerMethodField('get_time_until_expired')

    class Meta:
        model = FridgeItem
        fields = '__all__'

    #calculate days until the product has expired
    def get_time_until_expired(self, fridge_item):
        now = datetime.now().date()
        time_until_expired = fridge_item.exp_date - now

        
        return time_until_expired.days

        