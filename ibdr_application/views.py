from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt

from ibdr_application.models import ibdr_applicate


@method_decorator(csrf_exempt, name="dispatch")
class ibd_apllicate(View):
    def get(self, request):
        application = ibdr_applicate.objects.all()

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
