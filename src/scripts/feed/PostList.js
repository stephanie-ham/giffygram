import {Post} from "./Post.js"
import {getLikes, getPosts, getUsers} from '../data/provider.js'

// need to pull all posts into UL, need to link active user to posts to store favorites, display delete button only when user is logged in.


const convertPostToListElement = (post) => {

  const foundPost = `
      <li class="post">
        ${post.title}
        <br><br>
        <img class="post__image" src="${post.url}"/>
        <br><br>
        ${post.story}
        <br><br>
        <button>LIKE BUTTON</button>
      </li>
  `
  
  return foundPost
} // will need to link this to individual logins eventually

export const PostList = () => {

  const posts = getPosts()

    let html = `
        <ul>
            ${
                posts.map(convertPostToListElement).join("")
            } 
        </ul>
    `

    return html

}