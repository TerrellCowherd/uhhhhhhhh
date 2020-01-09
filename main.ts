function player () {
    cannon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . 
. . . f f . . . f f c b b b f . 
. . . f d f f f f c b b d d b f 
. . . f c b d d f c b b d d b f 
. . . f f c c c f c b b b b b f 
. . . f f f f f f c c b b b c f 
. . . f f f f f f f c c c c f f 
. . . f f . . . f f f f f f f . 
. . . . . . . . . f f f f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    cannon.setPosition(110, 64)
    controller.moveSprite(cannon, 100, 100)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f c b c f . . . . . 
. . . . . f c b d b f . . . . . 
. . . . . f f c b c f . . . . . 
. . . . . f f f c f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
    projectile2.setPosition(0, Math.randomRange(0, 120))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile2.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let projectile2: Sprite = null
let cannon: Sprite = null
player()
scene.setBackgroundColor(13)
game.onUpdate(function () {
    projectile()
})
