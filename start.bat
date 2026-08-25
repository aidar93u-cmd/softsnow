@echo off
start "" http://localhost:8137/index.html
python -m http.server 8137
