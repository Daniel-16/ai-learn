# HealthCare AI Waitlist API

## Introduction

This API allows a user to be able manage basic email data.

### Base URL

```
https://healthcare-waitlist-api.onrender.com/
```

## Authentication

Authentication is not required for this endpoint.

## Endpoint

### 1. Create email

- **Endpoint: 'POST /'**
- **Description: Create a new email to the database**
- **Request body:**
  ```
  {
      "email": "user@mail.com"
  }
  ```
- **Response:**

  **Status code:** 201

## Error Handling

- If a request is invalid, the API will respond with the relevant error message
- If there is a duplicated request, it will respond with a relevant error message from mongoDB.
