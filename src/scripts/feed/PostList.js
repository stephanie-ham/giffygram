import {Post} from "./Post.js"
import {getLikes, getPosts, getUsers, getChosenUser, setChosenUser} from '../data/provider.js'

//import getChosenUser

// need to pull all posts into UL, need to link active user to posts to store favorites, display delete button only when user is logged in.

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

/////// function to find the gifs a user liked
/////// this can't run until likes has a userId linked
// const findUserLikes = (user,  likes) => {
//   let userLike = null

<<<<<<< HEAD
  for (const like of likes) {
    if (user.id === like.userId) {
      userLike = like
    }
  return userLike
  }
} 
=======
//   for (const like of likes) {
//     if (user.id === like.userId) {
//       userLike = like
//     }

//   return userLike

//   }
// } /////// end function to find the gifs a user liked

// const findChosenUser = (chosenUser, posts) => {

//   // const giffygramUsers = getUsers()
//   // const giffygramPosts = getPosts()

//   for (const user of chosenUser) {
//     if (user.id === userId) {
      
//       const filteredPosts = posts.filter(
//         (post) => {
//           if (post.userId === user.id) {
//             window.alert(`this will filter to GIFs posted by ${giffygramUser.email}`)
//             return giffygramPost
//           }
//         }
//       )
//       return filteredPosts //filtering but not re-rendering
//     }
//   }
// }

>>>>>>> 40a0df8af449d1dd083cb347545bd2522e7e8eb1

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
  // const giffygramLikes = getLikes()
  const giffygramChosenUser = getChosenUser()

  if (giffygramChosenUser) {
    giffygramPosts = findChosenUserPost(giffygramChosenUser, giffygramPosts)
  } 
   
  let postHTML = ""
    postHTML += "<ul>"

    for (const giffygramPost of giffygramPosts) {
      const giffygramUser = findUser(giffygramPost, giffygramUsers)
<<<<<<< HEAD
      const giffygramLike = findUserLikes(giffygramUser, giffygramLikes)
=======
      // const giffygramLike = findUserLikes(giffygramUser, giffygramLikes)
      // const foundChosenUser = findChosenUser(giffygramUsers, giffygramPosts) 
>>>>>>> 40a0df8af449d1dd083cb347545bd2522e7e8eb1

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

