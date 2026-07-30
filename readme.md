MERN Todo Application

Overview

A full-stack Todo application built using the MERN stack. The application allows users to register, log in securely, and manage their daily tasks. The project is containerized with Docker and deployed on AWS EC2 using an automated CI/CD pipeline powered by GitHub Actions.

---

Tech Stack

Frontend

- React.js
- Axios
- React Router
- CSS

Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt

Database

- MongoDB

DevOps & Cloud

- Docker
- Docker Compose
- Docker Hub
- AWS EC2
- GitHub Actions (CI/CD)

---

Features

- User Registration
- User Login & Authentication
- Create Todo
- Update Todo
- Delete Todo
- Secure JWT Authentication
- Responsive User Interface

---

Docker Setup

Backend

- Dockerized using a custom Dockerfile.
- Runs inside its own container.

Frontend

- Dockerized and served through a container.

Database

- MongoDB runs inside a Docker container.

Docker Compose

Docker Compose is used to:

- Start all services together.
- Connect frontend, backend, and MongoDB.
- Simplify deployment with a single command.

---

AWS EC2 Deployment

The complete application is deployed on an AWS EC2 Ubuntu instance.

Deployment includes:

- Docker installed on EC2
- Docker Compose configuration
- Frontend, Backend, and MongoDB running as Docker containers
- Elastic IP configured for a static public IP

---

CI/CD Pipeline

GitHub Actions is used to automate deployment.

Workflow

1. Developer pushes code to the "main" branch.
2. GitHub Actions starts automatically.
3. Installs frontend and backend dependencies.
4. Builds the React application.
5. Builds Docker images.
6. Logs in to Docker Hub.
7. Pushes the latest Docker images.
8. Connects to the AWS EC2 instance using SSH.
9. Pulls the latest Docker images.
10. Restarts containers using Docker Compose.
11. The updated application becomes live automatically.

---

Project Architecture

Developer
→ GitHub Repository
→ GitHub Actions
→ Docker Build
→ Docker Hub
→ AWS EC2
→ Docker Compose
→ Live Application

---

Skills Demonstrated

- MERN Stack Development
- REST API Development
- JWT Authentication
- Docker & Docker Compose
- AWS EC2 Deployment
- Docker Hub
- Git & GitHub
- GitHub Actions CI/CD
- Linux Commands
- Automated Deployment

---

Future Improvements

- 
- Nginx Reverse Proxy
- HTTPS with SSL
- Terraform Infrastructure as Code
- Kubernetes Deployment