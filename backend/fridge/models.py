from django.db import models

# Create your models here.

class FridgeItem(models.Model):
    item_name = models.CharField(max_length=30)
    exp_date = models.DateField()
    