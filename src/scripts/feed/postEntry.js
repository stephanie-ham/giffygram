

export const postButton = () => {
    const html = `
    
    `
}



export const postEntryForm = () => {
    const html = `
    <div class="newPost"> 

        <input type="text" class="newPost_input" name="title">Title</input>
        <input type="text" class="newPost_input" name="url">URL of gif</input>
        <textarea class="newPost_description" name="story" rows="5" cols="50">Story behind your gif...</textarea>
        <input class="newPost_input" type="button" value="Save">
        <input class="newPost_input" type="button" value="Cancel">

        <div class="field">
            <label class="label" for="authorName">Author</label>
            <select name="authorName">
                <option value="emma">Emma</option>
                <option value="madeline">Madeline</option>
                <option value="lauren">Lauren</option>
                <option value="erin">Erin</option>
            </select>
        </div>
        <div class="field">
            <label class="label" for="letter">Letter</label>
            <textarea name="letter" rows="5" cols="50"></textarea>
        </div>
        <div class="field">
            <label class="label" for="topic">Topics</label>
            <div id="topicSelection" class="letterTopics">
                <input type="radio" name="topic" value="business">Business</input>
                <input type="radio" name="topic" value="friendly">Friendly</input>     
                <input type="radio" name="topic" value="family">Family</input>
                <input type="radio" name="topic" value="congratulations">Congratulations</input>
                <input type="radio" name="topic" value="condolences">Condolences</input>
            </div>
        </div>
        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            <select name="recipientSelect">
                <option value="emma">Emma</option>
                <option value="madeline">Madeline</option>
                <option value="lauren">Lauren</option>
                <option value="erin">Erin</option>
            </select>
        </div>
        <button id="sendLetter">Send Letter</button>
    </div>
    `
}

.miniMode 
.newPost
.newPost__input
.newPost__description
.newPost__drop
.newPost__upload
.newPost__fileUpload 
.newPost__uploadPrompt
.newPost__plus