@echo off

title Express Demo III App
color e
prompt $sApp$s$e$s

if errorlevel 1 goto one
if errorlevel 0 goto end

:one
echo Try again
goto end

:end