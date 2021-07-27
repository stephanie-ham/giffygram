import { postEntryForm, postButton } from "./feed/postEntry.js"
import { getGifFormDisplayStatus } from "./data/provider.js"
import { FooterMap } from "./nav/Footer.js"
import { PostList } from './feed/PostList.js'
import { NavBar } from "./nav/Navbar.js"


export const GiffyGram = () => {
    const displayStatus = getGifFormDisplayStatus()
    if (displayStatus) {
        return `
        <div class="giffygram__feed">
            <section>
                ${NavBar()}
            </section>
            <section>
                ${postEntryForm()}
            </section>
            <section>
                ${PostList()}
            </section>
            <section>
                ${FooterMap()}
            </section>
        </div>
        `
    } else {
        return `
        <div class="giffygram__feed">
            <section>
                ${NavBar()}
            </section>
            <section>
                ${postButton()}
            </section>
            <section>
                ${PostList()}
            </section>
            <section>
                ${FooterMap()}
            </section>
        </div>
        `
    }
}