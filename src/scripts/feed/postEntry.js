import { createPost, getGifFormDisplayStatus, setGifFormDisplayStatus } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gifButton") {
        setGifFormDisplayStatus(true)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createPost") {
        const title = document.querySelector("input[name='title']").value
        const url = document.querySelector("input[name='url']").value
        const description = document.querySelector("textarea[name='story']").value
        const date = new Date()

        const datatoSend = {
            title: title,
            url: url,
            description: description,
            date: date
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
            <input class="" type="button" value="Cancel">
        </div>
    </div>
    `
    return html
}

// .miniMode 
// .newPost
// .newPost__input
// .newPost__description

// .newPost__drop
// .newPost__upload
// .newPost__fileUpload 
// .newPost__uploadPrompt
// .newPost__plus

// <div class="field">
// <label class="label" for="authorName">Author</label>
// <select name="authorName">
//     <option value="emma">Emma</option>
//     <option value="madeline">Madeline</option>
//     <option value="lauren">Lauren</option>
//     <option value="erin">Erin</option>
// </select>
// </div>
// <div class="field">
// <label class="label" for="letter">Letter</label>
// <textarea name="letter" rows="5" cols="50"></textarea>
// </div>
// <div class="field">
// <label class="label" for="topic">Topics</label>
// <div id="topicSelection" class="letterTopics">
//     <input type="radio" name="topic" value="business">Business</input>
//     <input type="radio" name="topic" value="friendly">Friendly</input>     
//     <input type="radio" name="topic" value="family">Family</input>
//     <input type="radio" name="topic" value="congratulations">Congratulations</input>
//     <input type="radio" name="topic" value="condolences">Condolences</input>
// </div>
// </div>
// <div class="field">
// <label class="label" for="recipient">Recipient</label>
// <select name="recipientSelect">
//     <option value="emma">Emma</option>
//     <option value="madeline">Madeline</option>
//     <option value="lauren">Lauren</option>
//     <option value="erin">Erin</option>
// </select>
// </div>
// <button id="sendLetter">Send Letter</button>
// </div>