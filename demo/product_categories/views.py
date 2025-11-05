from django.shortcuts import render
from . models import *

# Create your views here.
def productcatagory(request):
    products = product_variety.objects.all().order_by('type')
    return render(request , 'pages/productcatagory.html',{'products_category': products})
