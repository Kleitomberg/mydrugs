from django.db import models
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView
from django.urls import reverse_lazy

from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name='index.html'

