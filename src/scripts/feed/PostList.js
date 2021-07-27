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


const findChosenUserPost = (user, posts) => {

  // const giffygramUsers = getUsers()
  // const giffygramPosts = getPosts()

      const filteredPosts = posts.filter(
        (post) => {
          if (post.userId === user) {
            return post
          }
        }
      )
      return filteredPosts //filtering but not re-rendering
}





///// const findChosenUser with below code

export const PostList = () => {

  const giffygramUsers = getUsers()
  let giffygramPosts = getPosts()
  // const giffygramLikes = getLikes()
  const giffygramChosenUser = getChosenUser()

  /// invoke getChosenUser


  if (giffygramChosenUser) {
    giffygramPosts = findChosenUserPost(giffygramChosenUser, giffygramPosts)
  } 

  //check if there's a chosen user then filter post
   
  let postHTML = ""
    postHTML += "<ul>"

    for (const giffygramPost of giffygramPosts) {
      const giffygramUser = findUser(giffygramPost, giffygramUsers)
      // const giffygramLike = findUserLikes(giffygramUser, giffygramLikes)
      // const foundChosenUser = findChosenUser(giffygramUsers, giffygramPosts) 

      postHTML += `<li>${Post(giffygramPost, giffygramUser)}</li>`
    } 

    postHTML += "</ul>"

    return postHTML

} /////// end export function to push feed to GiffyGram.js


///// start click event for user posts
// -- steps to build this:
// -- started with a click event matching the userId to the id on the HTML
// -- coded to get the click event to work with a window.alert output
// -- from there: added a giffygramPosts.filter
// -- filter to match user.id to post
// -- filter and window alert working, unsure how to render
applicationElement.addEventListener("click", event => {
  if (event.target.id.startsWith("postedBy--")) {

    const [, userId] = event.target.id.split("--")

    setChosenUser(parseInt(userId))

    // set chosen user and render app

    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

  }
}) /////// end click event for user posts


/////// TO DO ///////
// -- when clicked, giffygramUser should filter to only the gifs they posted -- //
// -- favorite button should render as yellow start when selected -- //
