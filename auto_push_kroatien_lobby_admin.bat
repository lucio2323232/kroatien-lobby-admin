@echo off
title 🚀 Auto-Push: Kroatien-Trainer mit Lobby + Admin

echo Starte automatisches Setup...

REM Git konfigurieren
git config --global user.name "lucio2323232"
git config --global user.email "sgolikwolf@gmail.com"

REM Repository initialisieren und pushen
git init
git remote remove origin
git remote add origin https://github.com/lucio2323232/kroatien-lobby-admin.git
git add .
git commit -m "🚀 Auto-Push: Kroatien-Trainer mit Lobby, Admin, DB"
git branch -M main
git push -u origin main

echo 🛠️ Installiere Abhängigkeiten...
npm install

echo ▶️ Starte Server...
npm start

pause
