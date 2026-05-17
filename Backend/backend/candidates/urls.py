from django.urls import path
from . import views

urlpatterns = [
    path('candidates/', views.get_candidates),
    path('candidates/add/', views.add_candidate),
    path('candidates/delete/<int:pk>/', views.delete_candidate),
]