from rest_framework_gis.serializers import GeoFeatureModelSerializer


from .models import Matwana


class MatwanaSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Matwana
        geo_field = "geom"
        fields = "__all__"
