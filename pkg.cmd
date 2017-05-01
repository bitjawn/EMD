@echo off

title Express Demo III Package Manager
color e
prompt $sPackager$s$e$s

if errorlevel 1 goto one
if errorlevel 0 goto end

:one
echo Try again
goto end

:end