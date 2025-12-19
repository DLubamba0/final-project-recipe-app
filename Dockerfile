FROM node:18
WORKDIR /app

# Copy only package.json from the backend folder
COPY backend/package.json ./  

# Install dependencies
RUN npm install

# Copy all backend files into /app
COPY backend/. .

# Expose the port your app uses
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
