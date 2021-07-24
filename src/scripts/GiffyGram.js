import { postEntryForm } from "./feed/postEntry.js"
import { postButton } from "./feed/postEntry.js"
import { getGifFormDisplayStatus } from "./data/provider.js"

export const GiffyGram = () => {
    const displayStatus = getGifFormDisplayStatus()
    if (displayStatus) {
        return `<h1>Giffygram</h1>
        ${postEntryForm()}`
    } else {
        return `<h1>Giffygram</h1>
        ${postButton()}`
    }
}
