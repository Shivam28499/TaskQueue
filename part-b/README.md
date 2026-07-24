## npm install ##
## npm run dev ##

## Setup ##

## src/config/config.json

{
  "development": {
    "username": "root",
    "password": "password", // your database password
    "database": "database name, // your database name
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
  "dialect": "sqlite",
  "storage": ":memory:"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

## Go inside part-b/src 
## npx sequelize db:migrate

# .env
 PORT=XXXX

# POST /api/v1/tasks

# Request body
{
"title":"Build Authentication API",
"priority":"critical",
"status":"pending",
"due_date":"2026-08-10",
"estimated_hours":5
}

# response
{
"success":true,
"message":"Task created successfully",
data: {
"title":"Build Authentication API",
"priority":"critical",
"status":"pending",
"due_date":"2026-08-10",
"estimated_hours":5
},
error: {}
}

# GET /api/v1/tasks // GET /api/tasks?status=pending

# response

{
  "success": true,
  "message": "Tasks get successfully",
  "data": [
    {
      "id": 1,
      "title": "Build Authentication API",
      "priority": "critical",
      "status": "pending",
      "due_date": "2026-08-10",
      "estimated_hours": 5
    }
  ],
  "error": {}
}

# GET /api/v1/tasks:id

# response
    {
        "success":true,
        "message":"Task get successfully",
        data: {
        "id":1
        "title":"Build Authentication API",
        "priority":"critical",
        "status":"pending",
        "due_date":"2026-08-10",
        "estimated_hours":5
        },
        error: {}
    }


# DELETE /api/v1/tasks/:id

# Update Task Status
# PATCH /api/v1/tasks/:id/status

Request:

{
  "status": "in_progress" 
}

Response:

{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "id":1,
    "status":"in_progress"
  },
  "error": {}
}

## Next Task ##
# GET /api/v1/task/next

Implemented using SQL ORDER BY with CASE expression.

Complexity:
Database sorting:
O(n log n)

Memory:
O(1) additional application memory.


##       Testing    ## 

# npm test ##
