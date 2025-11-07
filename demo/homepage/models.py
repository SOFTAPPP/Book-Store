from django.db import models
from django.utils import timezone

class HomePageBook(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='homepage_books/')
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2,blank=True,null=True)
    is_on_sale = models.BooleanField(default=True)
    date_added = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['title']
        verbose_name = "Home Page Book"
        verbose_name_plural = "Home Page Books"
    
    def __str__(self):
        return self.title
    
    @property
    def has_discount(self):
        """Check if book actually has a valid discount"""
        return self.is_on_sale and self.sale_price is not None and self.sale_price < self.original_price