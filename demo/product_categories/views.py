from django.shortcuts import render

# Create your views here.
def productcatagory(request):
    return render(request , 'pages/productcatagory.html')