from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name="home_page"),
    path('api/load-more-books/', views.load_more_books, name='load_more_books'),
]