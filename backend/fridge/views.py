from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FridgeItemSerializer
from .models import FridgeItem

class FridgeItemView(viewsets.ModelViewSet):
    serializer_class = FridgeItemSerializer
    queryset = FridgeItem.objects.all()
