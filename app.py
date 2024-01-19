import pygame
import random

pygame.init()
screen = pygame.display.set_mode((1920, 1080))
pygame.display.set_caption("balls")
bgc = "white"

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN:
            bgc = (
                random.randint(0, 255),
                random.randint(0, 255),
                random.randint(0, 255),
            )

    screen.fill(bgc)
    pygame.display.update()


pygame.quit()
