class Sprite {

    

    constructor({position, velocity, image, frames = {max: 1}, sprites, c}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.setImage(image)
        this.moving = false
        this.sprites = sprites
    }

    draw() {
        c.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height, 
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )
        if (!this.moving) return  

        if (this.frames.max > 1) {
            this.frames.elapsed++
        }

        if (this.frames.elapsed % 10 === 0) {
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
        }
    }

    setImage(image, key) {
        if (image) {
            this.image = image
        } else {
            this.image = this.sprites[key]
        }
        this.width = this.image.width / this.frames.max
        this.height = this.image.height
    }

    toggleMoving(bool) {
        this.moving = bool
    }
}
