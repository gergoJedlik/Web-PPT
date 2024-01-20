import pygame
import os

FPS = 60
CURRENT_PLAYER_MODEL = 'Player IDLE.png'
VEL = 4
GRAV = 4

PLAYER_ON_SOLID_GROUND = pygame.USEREVENT + 1

DEATH_TRIGGER = pygame.Rect(0, 719, 1280, 1)
Platform1 = pygame.Rect(0, 500, 615, 220)
Platform2 = pygame.Rect(665, 500, 630, 220)
PLATFORMS = [Platform1, Platform2]

PLAYER_CHAR_img = pygame.image.load(os.path.join('Texture', 'Player', CURRENT_PLAYER_MODEL))
PLAYER_CHAR = pygame.transform.scale_by(PLAYER_CHAR_img, 2)

pygame.init()
screen = pygame.display.set_mode((1280, 720))
pygame.display.set_caption("balls")


def draw_window(player_hitbox) -> None:
    screen.fill('white')
    pygame.draw.rect(screen, (255, 0, 0), DEATH_TRIGGER)
    screen.blit(PLAYER_CHAR, (player_hitbox.x, player_hitbox.y))
    pygame.draw.rect(screen, (0, 255, 0), Platform1)
    pygame.draw.rect(screen, (0, 255, 0), Platform2)
    pygame.display.update()



def player_movement_handle(keys_pressed, player_hitbox):
    for event in pygame.event.get():
        if event == PLAYER_ON_SOLID_GROUND:
            if keys_pressed[pygame.K_d] and player_hitbox.x + VEL + 32 < 1280: #RIGHT
                player_hitbox.x += VEL
            if keys_pressed[pygame.K_a] and player_hitbox.x - VEL > 0: #Left
                player_hitbox.x -= VEL
    if keys_pressed[pygame.K_d] and keys_pressed[pygame.K_LSHIFT] and player_hitbox.x + (VEL*2) + 32 < 1280:
        player_hitbox.x += VEL*2
    if keys_pressed[pygame.K_a] and keys_pressed[pygame.K_LSHIFT] and player_hitbox.x - (VEL*2) > 0:
        player_hitbox.x -= VEL*2

def handle_platform_collision(platforms, player_hitbox):
    for platform in platforms:
        if player_hitbox.colliderect(platform):
            pygame.event.post(pygame.event.Event(PLAYER_ON_SOLID_GROUND))

def gravity(event, player_hitbox):
        grav_mult = 0
        if event != PLAYER_ON_SOLID_GROUND:
            grav_mult += 1
            player_hitbox.y += GRAV*grav_mult

# I AM KILLING MYSELF
# THIS IS AWFUL & EXHAUSTING

def main() -> None:
    player_hitbox = pygame.Rect(10, 360, 32, 32)

    clock = pygame.time.Clock()
    running = True

    while running:
        clock.tick(FPS)

        handle_platform_collision(PLATFORMS, player_hitbox)
        

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            gravity(event, player_hitbox)

        keys_pressed = pygame.key.get_pressed()
        player_movement_handle(keys_pressed, player_hitbox)

        draw_window(player_hitbox)

    pygame.quit()



if __name__ == "__main__":
    main()
