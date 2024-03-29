import pygame
from random import *

pygame.init()

FPS = 60

WIDTH, HEIGHT = 800, 600

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("YOUR GAMES NAME")

bg_surf = pygame.image.load("elérés helye/kép neve").convert_alpha()
bg_rect = bg_surf.get_rect(bottomLeft=(0, HEIGHT))


clock = pygame.time.Clock()

def draw(bg_surf, bg_rect):
    screen.blit(bg_surf, bg_rect)

    
    if win:
        screen.blit(text, textRect)
    pygame.display.update()
win = False
run = True
trys = 0
while run:
    clock.tick(FPS)
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False
            break
        if event.type == pygame.KEYDOWN and not win:
            trys += 1
            c_color = (51 * randint(0, 5),51 *  randint(0, 5), 51 * randint(0, 5))
            bg_c = (51 * randint(0, 5),51 *  randint(0, 5), 51 * randint(0, 5))
            break

    if c_color == bg_c:
        win = True
        inverted_color = []
        for value in bg_c:
            inverted_color.append(255 - value)
        inverted_color = tuple(inverted_color)
        font = pygame.font.Font('freesansbold.ttf', 64)
        if c_color == (0, 0, 0):
            text = font.render(f'NIGGER!!!!!', True, inverted_color, None)
        else:
            text = font.render(f'WIN!!!!!', True, inverted_color, None)
        textRect = text.get_rect()
        textRect.center = (WIDTH // 2, HEIGHT // 2)
        
    if not win:
        draw(screen, win, c_color, bg_c)
    else:
        draw(screen, win, c_color, bg_c, text, textRect)

    
pygame.quit()
quit()


