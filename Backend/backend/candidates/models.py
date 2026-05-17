from django.db import models

class Candidate(models.Model):
    name = models.CharField(max_length=100)
    experience = models.IntegerField()
    testScore = models.IntegerField()
    degree = models.CharField(max_length=10)
    score = models.FloatField()

    def __str__(self):
        return self.name