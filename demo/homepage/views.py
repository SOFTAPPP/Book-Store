from django.shortcuts import render
# Create your views here.
from django.http import JsonResponse
from .models import HomePageBook

def home_page(request):
    books = HomePageBook.objects.all()[:10]
    total_books = HomePageBook.objects.count()
    
    return render(request, 'index.html', {
        'books': books,
        'show_load_more': total_books > 10
    })

def load_more_books(request):
    offset = int(request.GET.get('offset', 0))
    limit = int(request.GET.get('limit', 20))
    
    books = HomePageBook.objects.all()[offset:offset + limit]
    
    data = []
    for book in books:
        data.append({
            'id': book.id,
            'title': book.title,
            'image_url': book.image.url if book.image else '',
            'original_price': str(book.original_price),
            'sale_price': str(book.sale_price),
            'is_on_sale': book.is_on_sale,
            'has_discount': book.has_discount,
        })
    
    return JsonResponse({
        'books': data,
        'has_more': (offset + limit) < HomePageBook.objects.count()
    })