import { createPost, getGifFormDisplayStatus, setGifFormDisplayStatus } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gifButton") {
        setGifFormDisplayStatus(true)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancelForm") {
        setGifFormDisplayStatus(false)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createPost") {
        const title = document.querySelector("input[name='title']").value
        const url = document.querySelector("input[name='url']").value
        const story = document.querySelector("textarea[name='story']").value
        const date = new Date()
        const userId = parseInt(localStorage.gg_user)

        const datatoSend = {
            title: title,
            url: url,
            story: story,
            date: date,
            userId: userId
        }

        createPost(datatoSend)
        setGifFormDisplayStatus(false)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const postButton = () => {
    const html = ` 
    <div class="newPost__drop">
        <button id="gifButton" type="button" class="miniMode">Have a gif to post?</button>
    </div>
    `
    return html
}

export const postEntryForm = () => {
    const html = `
    <div class="newPost"> 

        <div class="newPost_input">
            <input type="text" name="title" placeholder="Title"></input>
        </div>
        <div class="newPost_input">
            <input type="text" name="url" placeholder="URL of gif"></input>
        </div>   
        <div class="newPost_description">
            <textarea name="story" rows="5" cols="50" placeholder="Story behind your gif..."></textarea>
        </div>

        <div class="newPost_upload">
            <input class="" id="createPost" type="button" value="Save">
            <input class="" id="cancelForm" type="button" value="Cancel">
        </div>
    </div>
    `
    return html
}