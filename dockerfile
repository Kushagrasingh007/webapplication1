# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the server.js file to the working directory
COPY server.js .

# Expose port 3000
EXPOSE 3000

# Run the Node.js server
CMD [ "node", "server.js" ]
