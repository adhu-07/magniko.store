@echo off
echo ===================================================
echo   MAGNIKO -- Pushing Editorial Homepage to GitHub
echo   Target: https://adhu-07.github.io/magniko.store/
echo ===================================================
echo.

echo [1/5] Initializing Git repository...
git init

echo [2/5] Staging all project files...
git add .

echo [3/5] Committing changes...
git commit -m "Update: MAGNIKO editorial homepage with interactive sections & SEO"

echo [4/5] Setting main branch...
git branch -M main

echo [5/5] Adding remote repository: https://github.com/adhu-07/magniko.store.git
git remote remove origin >nul 2>&1
git remote add origin https://github.com/adhu-07/magniko.store.git

echo.
echo ===================================================
echo   Pushing code to GitHub main branch...
echo   (Authorization prompt may appear)
echo ===================================================
git push -u origin main --force

echo.
echo ===================================================
echo   Successfully pushed to GitHub!
echo   GitHub Pages: https://adhu-07.github.io/magniko.store/
echo ===================================================
pause
