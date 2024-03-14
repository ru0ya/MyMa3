from rest_framework.routers import DefaultRouter

from .views import MatwanaViewSet


router = DefaultRouter()

router.register(
        prefix="matwana",
        viewset=MatwanaViewSet,
        basename="matwana"
        )

urlpatterns = router.urls
