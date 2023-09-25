from django.db import models


# Create your models here.
class ibdr_applicate(models.Model):
    number_application = models.IntegerField()
    fio = models.CharField(max_length=2000)  # Как VARCHAR(2000 CHAR)
    doljn = models.CharField(max_length=100)
    sudis_mail = models.CharField(max_length=200)
    ip = models.CharField(max_length=300)
    telephone = models.CharField(max_length=30)
    vid_uch = models.CharField(max_length=500)
    vid_zap = models.CharField(max_length=1000)
    mej_reg = models.CharField(max_length=3)
    dt_create = models.DateField(auto_now_add=True)  # Как DATE(sysdate)
