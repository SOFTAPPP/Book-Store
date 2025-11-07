from django.shortcuts import render
from . models import ProductVariety

# Create your views here.
def productcatagory(request):
    products = ProductVariety.objects.all().order_by('type')
    return render(request , 'pages/productcatagory.html',{'products_category': products})
