import json

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from random import randint

from ibdr_application.models import ibdr_applicate


@method_decorator(csrf_exempt, name="dispatch")
class Ibd_Apllicate(View):
    def get(self, request):
        application = Ibd_Apllicate.objects.all()

        search_number = request.GET.get("number_application", None)
        if search_number:
            application = application.filter(number_application=search_number)

        result = []

        for v in application:
            result.append({
                "number_application": v.number_application,
                "fio": v.fio,
                "doljn": v.doljn,
                "sudis_mail": v.sudis_mail,
                "ip": v.ip,
                "telephone": v.telephone,
                "vid_uch": v.vid_uch,
                "vid_zap": v.vid_zap,
                "mej_reg": v.mej_reg,
                "dt_create": v.dt_create
            })

        return JsonResponse(result, safe=False)

    def post(self, request):
        application_data = json.loads(request.body)

        create_number_applikation = randint(1, 3000)
        print(application_data)
        for v in application_data:
            application = ibdr_applicate()

            application.number_application = create_number_applikation
            application.fio = v["fio"]
            application.doljn = v["doljn"]
            application.sudis_mail = v["sudis_mail"]
            application.ip = v["ip"]
            application.telephone = v["telephone"]
            application.vid_uch = v["vid_uch"]
            application.vid_zap = v["vid_zap"]
            application.mej_reg = v["mej_reg"]

            application.save()

        return JsonResponse({
            "id": application.id,
            "text": application.fio
        })
