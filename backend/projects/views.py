import sys
import os

from django.http import JsonResponse

# Ensure Django recognizes backend as a module
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from db import projects_collection  # Import MongoDB connection

def get_projects(request):
    projects = list(projects_collection.find({}, {"_id": 0}))  # Fetch all projects, exclude `_id`
    return JsonResponse(projects, safe=False)
