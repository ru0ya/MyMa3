from django.contrib.gis.db import models as gismodels
# from django.contrib.db import models


class Matwana(gismodels.Model):
    stop_id = gismodels.CharField(max_length=254, null=True)
    stop_name = gismodels.CharField(max_length=254, null=True)
    stop_lat = gismodels.FloatField(null=True)
    stop_lon = gismodels.FloatField(null=True)
    route_nams = gismodels.CharField(max_length=109, null=True)
    layer = gismodels.CharField(max_length=10, null=True)
    geom = gismodels.MultiPointField(srid=4326)

    class Meta:
        """
        indexes the geom, fastening fetching time
        """
        indexes = [
                gismodels.Index(fields=["geom"], name="geom_index")
                ]

        def __str__(self):
            return self.name
