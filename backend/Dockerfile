# Use Python base image
FROM python:3.12

# Set working directory
WORKDIR /app

# Copy and install dependencies directly
RUN pip install --no-cache-dir django djangorestframework djongo pymongo django-cors-headers djangorestframework-simplejwt

# Copy the rest of the application
COPY . .

# Expose Django's default port
EXPOSE 8000

# Command to run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
