from django.urls import path
from rest_framework import routers

from .views import BlogCategoryViewSet, BlogPostViewSet

router = routers.SimpleRouter()
router.register('category', BlogCategoryViewSet, basename='category')
router.register('post', BlogPostViewSet, basename='post')

urlpatterns = []

urlpatterns += router.urls