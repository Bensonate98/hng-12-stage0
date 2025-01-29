# A simple express API

This is a simple Express.js API that returns a JSON response containing an email, the current date and time, and a GitHub URL.

## Features

- Uses `dotenv` to manage environment variables.
- Enables CORS for cross-origin requests.
- Serves a single route that returns a JSON response with metadata.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Bensonate98/hng-12-stage0.git

2. Navigate to the project directory:

   ```sh
   cd hng-12-stage0

3. Install dependencies:

   ```sh
   npm install

4. Create a .env file in the root directory and define the following variable:

   ```sh
   PORT=3000

5. Start server with:

   ```sh
   npm run dev

The server will run on http://localhost:3000

## API Documentation

Base URL: https://ben-stage0.vercel.app/

Endpoints: 

GET https://ben-stage0.vercel.app/

Description: Returns a JSON response with metadata, including an email, the current date and time, and a GitHub URL.

Request:
This endpoint does not require any request body or parameters.

Response:

Status Code: 200 OK

Response Body:

 ```sh
{
  "email": "bensonate98@gmail.com",
  "current_datetime": "2025-01-28T12:00:00.000Z",
  "github_url": "https://github.com/Bensonate98/hng-12-stage0"
}






