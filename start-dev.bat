@echo off
cd /d "c:\Users\mantu\Downloads\mantu\Portfolio\testing"
node_modules\.bin\vite.cmd --host 0.0.0.0 --port 5173 > vite-output.txt 2>&1
