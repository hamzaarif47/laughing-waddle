#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}==================================${NC}"
echo -e "${BLUE}Task Manager - Quick Start Setup${NC}"
echo -e "${BLUE}==================================${NC}"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

# Start PostgreSQL with Docker Compose
echo -e "\n${GREEN}Starting PostgreSQL database...${NC}"
docker-compose up -d

# Wait for PostgreSQL to be ready
echo -e "${GREEN}Waiting for PostgreSQL to be ready...${NC}"
sleep 5

# Setup backend
echo -e "\n${GREEN}Setting up backend...${NC}"
cd backend

if [ ! -f ".env" ]; then
    echo -e "${BLUE}Creating .env file...${NC}"
    cp .env.example .env
    # Update the password to match docker-compose
    sed -i 's/DB_PASSWORD=your_password_here/DB_PASSWORD=postgres123/' .env
fi

if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}Installing backend dependencies...${NC}"
    npm install
fi

echo -e "${BLUE}Initializing database...${NC}"
npm run init-db

# Setup frontend
echo -e "\n${GREEN}Setting up frontend...${NC}"
cd ../frontend

if [ ! -f ".env" ]; then
    echo -e "${BLUE}Creating .env file...${NC}"
    cp .env.example .env
fi

if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}Installing frontend dependencies...${NC}"
    npm install
fi

cd ..

echo -e "\n${GREEN}==================================${NC}"
echo -e "${GREEN}Setup completed successfully!${NC}"
echo -e "${GREEN}==================================${NC}"
echo -e "\n${BLUE}To start the application:${NC}"
echo -e "1. Backend:  ${BLUE}cd backend && npm run dev${NC}"
echo -e "2. Frontend: ${BLUE}cd frontend && npm run dev${NC}"
echo -e "\n${BLUE}Access the application at:${NC}"
echo -e "Frontend: ${GREEN}http://localhost:3000${NC}"
echo -e "Backend:  ${GREEN}http://localhost:5000${NC}"
