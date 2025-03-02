from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://mongodb:27017/")
db = client["portfolio_db"]  # Database name

# Example collection (like a table in SQL)
projects_collection = db["projects"]
