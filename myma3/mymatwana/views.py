from rest_framework import viewsets, filters


from .models import Matwana
from .serializers import MatwanaSerializer


class MatwanaViewSet(viewsets.ModelViewSet):
    queryset = Matwana.objects.all()
    serializer_class = MatwanaSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['route_nams', 'stop_name']
