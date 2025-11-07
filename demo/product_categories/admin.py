from django.contrib import admin
from .models import ProductVariety

@admin.register(ProductVariety)
class ProductVarietyAdmin(admin.ModelAdmin):
    list_display = ['name', 'type', 'date_added']  
    list_filter = ['type', 'date_added']           
    search_fields = ['name']                       
    ordering = ['name']                            