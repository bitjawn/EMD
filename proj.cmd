@echo off

title Shopping Cart Demo App
color e
prompt $sShopping Cart$s$e$s

if errorlevel 1 goto one
if errorlevel 0 goto end

:one
echo Try again
goto end

:end