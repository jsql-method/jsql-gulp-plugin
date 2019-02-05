@echo off
ECHO Po pojawieniu sie "Username" podaj login do rejestru NPM
CALL npm login

ECHO Jestes poprawnie zalogowany jako:
CALL npm whoami

ECHO Przed opublikowaniem w rejestrze NPM pamietaj o zaktualizowaniu pliku CHANGELOG.md
ECHO.
pause >nul

ECHO.
ECHO Po zapisaniu zmian w notatniku wroc do konsoli i wcisnij enter
REM Otwiera notepad aby zmienic wersje ####################################
notepad package.json

ECHO Po wcisnieciu enter zmiany beda publikowane w rejestrze NPM
ECHO.
pause >nul
ECHO Zmiany sa teraz publikowane w rejestrze NPM
CALL npm publish

REM wylogowuje ############################################################
CALL npm logout

ECHO.
ECHO Nacisnij enter aby zakonczyc
pause >nul