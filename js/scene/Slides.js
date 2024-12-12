import * as THREE from 'three'
import assets from '../lib/AssetManager'

// how much to wait until the animation of the next slides starts
export const SLIDES_INTERVAL = 0.8 // seconds

export class Slides extends THREE.Group {
  slides = []
  slideIndex = 0

  constructor(webgl, options) {
    super(options)
    this.webgl = webgl
    this.options = options

    const { firstImage, otherImages, config } = this.options

    // initialize the first slide components
    this.initSlide(firstImage)

    // and initialize the other once they're loaded
    otherImages.forEach(image => {
      assets
        .loadSingle({
          url: image,
          type: 'texture',
          renderer: webgl.renderer,
        })
        .then(this.initSlide)
    })

    // make the first one enter
    this.slides[this.slideIndex].animateTo(0.5)
  }

  initSlide = image => {
    const { Slide, shape, mouseBlob } = this.options

    const texture = assets.get(image)
    const slide = new Slide(this.webgl, { texture }, shape, mouseBlob)
    this.add(slide)
    this.slides.push(slide)
  }
}
