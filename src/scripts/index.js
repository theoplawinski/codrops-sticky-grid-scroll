import { preloadImages } from "./utils.js"

class App {
    constructor() {
    }
}

preloadImages().then(() => {
    document.body.classList.remove("loading")
    new App()
})
