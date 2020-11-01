#!/bin/bash

BGreen='\033[1;32m'
BYellow='\033[1;33m'

echo -e "${BYellow}STARTING CHECKS\n\n"

cd utils && python check_correct_images_dimensions.py &&
npm run test &&
npm run cy:run &&
npm run lint &&
npm run build &&
npm run make-badges &&
npm run lighthouse-badges &&


echo -e "${BGreen}\n\nCHECKS PASSED SUCCESSFULLY"
