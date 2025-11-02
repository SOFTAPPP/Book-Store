from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home_page, name="home_page"),
    path('productcatagory/', views.productcatagory, name="productcatagory"),
    path('aboutus/', views.Aboutus, name="aboutus"),
    path('contactinformation/', views.contact_information, name="contactinformation"),
]

