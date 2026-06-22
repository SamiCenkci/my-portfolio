# Chat Application

A modern real-time chat application built with Spring Boot, JWT authentication, and a JavaFX desktop client.

## Overview

A full-stack chat application featuring secure user authentication, real-time messaging, and persistent message storage. The project demonstrates layered architecture, secure API design, and clean separation between backend and client.

## Features

- 🔐 JWT-based authentication with secure password hashing
- 💬 Real-time messaging between users
- 🖥️ JavaFX desktop client with a responsive interface
- 💾 Persistent message storage in a SQL database
- 🏗️ Layered backend architecture (Controller / Service / Repository)
- 📡 REST API endpoints for all core operations

## Tech Stack

**Backend**
- Java 17
- Spring Boot
- Spring Security
- JWT (JSON Web Tokens)
- Maven

**Frontend**
- JavaFX
- FXML

**Database**
- PostgreSQL / MySQL / H2 *(choose what you actually used)*

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.8+
- A running SQL database instance

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
```

2. **Configure the database**

   Update `src/main/resources/application.properties` with your database credentials:
```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/chatdb
   spring.datasource.username=your_username
   spring.datasource.password=your_password
```

3. **Build the project**
```bash
   mvn clean install
```

4. **Run the backend**
```bash
   mvn spring-boot:run
```

5. **Launch the JavaFX client**
```bash
   mvn javafx:run
```

## Usage

1. Register a new account through the client
2. Log in with your credentials — a JWT token is issued
3. Start sending messages in real time

## Project Structure
