import {WebpMachine} from "webp-hero"

// Polyfill webp for Safary
const webpMachine = new WebpMachine()
webpMachine.polyfillDocument()
