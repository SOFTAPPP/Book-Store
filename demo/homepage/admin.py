from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import HomePageBook

@admin.register(HomePageBook)
class HomePageBookAdmin(admin.ModelAdmin):
    list_display = ['title', 'sale_price', 'is_on_sale', 'date_added']
    list_filter = ['is_on_sale', 'date_added']
    search_fields = ['title']