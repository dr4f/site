# Script to update site distribution
vuepress build
cp -r .vuepress/dist docs
echo "Copied static site to docs folder"
