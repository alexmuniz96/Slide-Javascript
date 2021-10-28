import { SlideNav } from "./slide.js"

const slide = new SlideNav(".slide", ".wrapper")
slide.init()
slide.addArrow(".next", ".prev")

slide.addControl()
