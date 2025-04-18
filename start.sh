#!/bin/bash

echo "🔄 Installing dependencies for backend..."
cd server


echo "🚀 Starting backend server..."
npm run dev &

cd ../client
echo "🔄 Installing dependencies for frontend..."


echo "🌐 Starting React frontend..."
npm start
