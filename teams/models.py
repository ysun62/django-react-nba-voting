from django.db import models


class Team(models.Model):
    id = models.CharField(max_length=15, primary_key=True)
    thumbUp = models.IntegerField(default=0)
    thumbDown = models.IntegerField(default=0)

