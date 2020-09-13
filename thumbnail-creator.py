from PIL import Image
import os

imagesDir = "public/img/"

for file in os.listdir(imagesDir):
    if file.endswith(".png") and file.find("lowly") == -1 and file.find("-min.png"):
        imageFilePath = os.path.join(imagesDir, file)
        image = Image.open(imageFilePath)

        MAX_SIZE = (800, 800)
        image.thumbnail(MAX_SIZE)

        imageFileNameBase = os.path.basename(file)
        imageFileName = os.path.splitext(imageFileNameBase)[0]
        image.save(f'{imagesDir}{imageFileName}-min.png')

