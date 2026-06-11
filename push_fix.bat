@echo off
cd /d e:\Sk-management-v2.0
git add -A
git commit -m "Fix asset import casing for production build (PNG/JPG)"
git remote set-url origin https://ghp_4crlhUVqlTAWe1EVKYpxgjPBlAeP0I24d7m@github.com/skeventsmanagement28-spec/SK-EVENT-MANAGEMENTS.git
git push origin main
echo DONE
