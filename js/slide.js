export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
    this.dist = { finalPosition: 0, startX: 0, movement: 0 }
  }

  onStart(event) {
    event.preventDefault()
    this.wrapper.addEventListener("mousemove", this.onMove)
    this.dist.startX = event.clientX
  }

  onMove(event) {
    const finalPosition = this.dist.startX - event.clientX
    this.moveSlide(finalPosition)
  }

  moveSlide(distX) {
    this.slide.style.transform = `tranlate3d${distX},0,0`
  }

  updatePosition(event) {
    this.dist.movement = this.dist.startX - event.clientX
    return movement
  }

  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove)
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart)
    this.wrapper.addEventListener("mouseup", this.onEnd)
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
  }

  init() {
    this.bindEvents()
    this.addSlideEvents()
    return this
  }
}