 @echo off
setlocal enabledelayedexpansion

REM Step 1: Ask for the branch name
set /p branchName=Enter the name of your branch: 

REM Step 2: Checkout the branch
echo Checking out branch: %branchName%
git checkout %branchName%

REM Step 3: Stage changes
echo Staging all changes...
git add .

REM Step 4: Ask for commit message
set /p commitMsg=Enter your commit message: 

REM Step 5: Commit changes
echo Committing changes...
git commit -m "%commitMsg%"

REM Step 6: Push changes
echo Pushing to branch: %branchName%
git push

REM If push fails, try with -u
IF ERRORLEVEL 1 (
    echo First push failed, trying with -u...
    git push -u origin %branchName%
)

REM Step 7: Pull latest from main
echo Fetching and merging latest from main...
git fetch origin
git merge origin/main

REM Push again after merge
git push

echo.
echo Done!
pause
