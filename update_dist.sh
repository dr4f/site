# Script to update site distribution
vuepress build
echo "Built site to docs folder"
git add .
git commit -m "site update `date`"
git push
echo "Updated the site!"
