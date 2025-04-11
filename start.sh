#!/bin/bash

echo "🔧 Starting backend server..."
(cd server && npm start) &

sleep 2

echo "🌐 Starting frontend client..."
(cd client && npm start)
