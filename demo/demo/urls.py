from django.contrib import admin
from django.urls import path , include
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home_page, name="home_page"),
    path('productcatagory/',include("product_categories.urls")),
    path('aboutus/', views.Aboutus, name="aboutus"),
    path('contactinformation/', views.contact_information, name="contactinformation"),
]

