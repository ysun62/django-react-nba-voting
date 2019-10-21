from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.CharField(max_length=75, blank=False)
    upVote = models.CharField(max_length=15, default="")
    downVote = models.CharField(max_length=15, default="")
