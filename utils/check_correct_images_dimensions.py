import imghdr
import os
from PIL import Image


IMAGES_FOLDER="../public/img/"
VALID_IMAGES_FORMAT=['png', 'jpg', 'jpeg', 'svg']

def is_image(file_name):
  return imghdr.what(IMAGES_FOLDER + file_name.lower()) in VALID_IMAGES_FORMAT

def is_image_squared(file_name):
  image = Image.open(IMAGES_FOLDER + file_name)
  width, height = image.size

  if width - height == 0:
    return True
  return False

def load_images_from_folder(folder):
  for file_name in os.listdir(folder):
    if is_image(file_name) and is_image_squared(file_name) == False:
      raise Exception("This image -> " + IMAGES_FOLDER + file_name + " is not square")


load_images_from_folder(IMAGES_FOLDER)
