@echo off

title Express Demo III Production Build
color e
prompt $sProduction Builder$s$e$s

if errorlevel 1 goto one
if errorlevel 0 goto end

:one
echo Try again
goto end

:end