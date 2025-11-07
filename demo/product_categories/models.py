from django.db import models
from django.utils import timezone

class ProductVariety(models.Model):
    PRODUCT_TYPE_CHOICES = [
        ('LAFK', 'Learning Apps For Kids'),
        ('PF', 'Popular Fictions'),
        ('AAL', 'All About Love'),
        ('MG', 'Manga Club'),
        ('NA', 'New Arrivals'),
        ('MC', 'Marvel Comics'),
        ('DC', 'DC Comics'),
        ('RF', 'Romance & Fictions'),
        ('KB', 'Kids Books'),
        ('MT', 'Mythology & Tails')
    ]
    
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='product_categories/')
    date_added = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=4, choices=PRODUCT_TYPE_CHOICES)
    
    class Meta:
        ordering = ['name']  # Alphabetical order
        verbose_name = "Product Variety"
        verbose_name_plural = "Product Varieties"
    
    def __str__(self):
        return self.name