// import {PostEntry} from './feed/PostEntry.js'
import { PostList } from './feed/PostList.js'
import { Footer } from "./nav/Footer.js"
import { NavBar } from "./nav/Navbar.js"
// import {MessageForm} from './message/MessageForm.js'


export const GiffyGram = () => {

    return `
    <section>
        ${NavBar()}
    </section>

    <section class="PostEntry"></section>
    
    <section class="giffygram__feed">
        ${PostList()}
    </section>

    <section>
        ${Footer()}
    </section>
    `
}
