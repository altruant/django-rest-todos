from django.urls import path

from .views import TodoListAPIView, TodoDetailAPIView


app_name = 'todos'

urlpatterns = [
    path('<int:pk>/', TodoDetailAPIView.as_view(), name='todo_detail'),
    path('', TodoListAPIView.as_view(), name='todo_list'),
]
