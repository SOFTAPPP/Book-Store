from django.db import models as mod
from django.utils import timezone

class product_variety(mod.Model):
    PRODUCT_TYPE_CHOICE = [
        ('LAFK','Learning Apps For Kids'),
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
    
    name = mod.CharField(max_length=100)
    image = mod.ImageField(upload_to='product_categories/')
    date_added = mod.DateTimeField(default=timezone.now)
    type = mod.CharField(max_length=4,choices=PRODUCT_TYPE_CHOICE)
    
    def __str__(self):
        return self.name
    

