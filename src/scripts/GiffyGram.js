// import {NavBar} from './nav/NavBar.js'
// import {PostEntry} from './feed/PostEntry.js'
import {PostList} from './feed/PostList.js'
// import {Footer} from './nav/Footer.js'
// import {MessageForm} from './message/MessageForm.js'



export const GiffyGram = () => {

    return `
    
    <section class="PostEntry"></section>
    
    <section class="giffygram__feed">
        ${PostList()}
    </section>
    `
}
