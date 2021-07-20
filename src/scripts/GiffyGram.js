// import {NavBar} from './nav/NavBar.js'
// import {PostEntry} from './feed/PostEntry.js'
import {PostList} from './feed/PostList.js'
// import {Footer} from './nav/Footer.js'
// import {MessageForm} from './message/MessageForm.js'



export const GiffyGram = () => {

    return `<h1 class="">Giffygram</h1>

    <button class="miniMode">Have a gif to post?</button>

    <section class="PostEntry"></section>
    
    <section class="giffygram__feed">
        ${PostList()}
    </section>
    `
}
