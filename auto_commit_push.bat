@echo off
cd /d "%~dp0"

:loop
git add .
git commit --allow-empty-message -m ""
git push origin main
timeout /t 60 /nobreak
goto loop