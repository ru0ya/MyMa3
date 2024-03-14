import os
from django.contrib.gis.utils import LayerMapping
from django.contrib.gis.gdal import DataSource

from mymatwana.models import Matwana


matwana_mapping = {
    'stop_id': 'stop_id',
    'stop_name': 'stop_name',
    'stop_lat': 'stop_lat',
    'stop_lon': 'stop_lon',
    'route_nams': 'route_nams',
    'layer': 'layer',
    'geom': 'MULTIPOINT',
}


def import_data(verbose=True):
    # try:
    file = os.path.join(os.getcwd(), 'matatu.gpkg')
    # file = '../matatu.gpkg'
    data_source = DataSource(file)
    stage = data_source[0].name

    stage_layer_mapping = LayerMapping(
            Matwana, file, matwana_mapping, layer=stage
            )

    stage_layer_mapping.save(strict=True, verbose=verbose)
    # except Exception as e:
        # print("An error occurred: {e}")
