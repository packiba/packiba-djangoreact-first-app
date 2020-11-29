from django.contrib import admin
from django.contrib.admin import ModelAdmin

from .models import BlogCategory, BlogPost


@admin.register(BlogCategory)
class UserBookRelationAdmin(ModelAdmin):
    pass

@admin.register(BlogPost)
class UserBookRelationAdmin(ModelAdmin):
    pass
