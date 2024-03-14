from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin

from .models import Matwana


class StageAdmin(LeafletGeoAdmin):
    list_display = ("stop_name", "route_nams",)


admin.site.register(Matwana, StageAdmin)
