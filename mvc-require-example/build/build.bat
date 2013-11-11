@echo off
set PWD=%~p0
set PWD=%PWD:\=/%
cd "D:\node"
node.exe %PWD%build-build.js build.js
node.exe %PWD%r.js -o %PWD%build.js
cd %~dp0