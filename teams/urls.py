from rest_framework import routers
from .api import TeamViewSet

router = routers.DefaultRouter()
router.register("api/teams", TeamViewSet, "teams")

urlpatterns = router.urls
