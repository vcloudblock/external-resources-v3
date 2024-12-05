@echo off
setlocal enabledelayedexpansion

:: Get the directory where the current script is located
set "INSTALL_DIR=%~dp0"

:: Remove trailing backslash if present
if "%INSTALL_DIR:~-1%"=="\" set "INSTALL_DIR=%INSTALL_DIR:~0,-1%"
echo %INSTALL_DIR%

:: Set env
setx /m VCLOUDBLOCK_EXTERNAL_RESOURCES "%INSTALL_DIR%"

echo VCLOUDBLOCK_EXTERNAL_RESOURCES has been set to: "%INSTALL_DIR%"
echo.
echo Installation completed.
echo Press any key to exit...
pause >nul
