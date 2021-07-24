import { Footer } from "./nav/Footer.js"
import { NavBar } from "./nav/Navbar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
        <section>
        ${NavBar()}
        </section>
        <section>
        ${Footer()}
        </section>
        
    `
    
  
}
