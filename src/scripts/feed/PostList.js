import { Post } from "./Post.js"
import { getPosts, getUsers, getChosenUser, setChosenUser } from '../data/provider.js'


const applicationElement = document.querySelector('.giffygram')

/////// function to user who posted the gif
const findUser = (post, users) => {
  let postUser = null

  for (const user of users) {
    if (user.id === post.userId) {
      postUser = user
    }
  }

  return postUser

} /////// end function to user who posted the gif

const findChosenUserPost = (user, posts) => {

  const filteredPosts = posts.filter(
    (post) => {
      if (post.userId === user) {
        return post
      }
    }
  )
  return filteredPosts
}
  
  /////// export function to push feed to GiffyGram.js
  export const PostList = () => {

    const giffygramUsers = getUsers()
    let giffygramPosts = getPosts()

    const giffygramChosenUser = getChosenUser()

    if (giffygramChosenUser) {
      giffygramPosts = findChosenUserPost(giffygramChosenUser, giffygramPosts)
    }

    let postHTML = ""
    postHTML += "<ul>"

    for (const giffygramPost of giffygramPosts) {
      const giffygramUser = findUser(giffygramPost, giffygramUsers)

      postHTML += `<li>${Post(giffygramPost, giffygramUser)}</li>`
    }

    postHTML += "</ul>"

    return postHTML

  } /////// end export function to push feed to GiffyGram.js

  /////// click event to filter posts by user
  applicationElement.addEventListener("click", event => {
    if (event.target.id.startsWith("postedBy--")) {

      const [, userId] = event.target.id.split("--")

      setChosenUser(parseInt(userId))

      applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
  }) /////// end click event to filter posts by user


