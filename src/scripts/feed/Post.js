import { deletePost, favoritePost, getLikes, unfavoritePost } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", clickEvent => { ////// start click event
  
  if (clickEvent.target.id.startsWith("blockPost--")) { // start delete
    const [, postId] = clickEvent.target.id.split("--")
    deletePost(parseInt(postId))
  } // end delete
  
  if (clickEvent.target.id.startsWith("unfavorite--")) { // start favorite

    const [, postId] = clickEvent.target.id.split("--")
    const currentUser = parseInt(localStorage.getItem("gg_user"))
   
    const data = { ////// need to figure out how to push a userId
      postId: parseInt(postId),
      userId: currentUser
    }
    
    favoritePost(data)

    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
 } // end unfavorite

  if (clickEvent.target.id.startsWith("favorite--")) { // start unfavorite

    const [, postId] = clickEvent.target.id.split("--")

    const likeId = findLikeId(parseInt(postId))

    if (likeId) {
      unfavoritePost(likeId)
    }
  } // end unfavorite
}) ////// end click event

////// function to see if currentUser has liked a post, allows yellow star to render
const userLikesPost = (postId) => {
  const giffygramLikes = getLikes()
  const currentUser = parseInt(localStorage.getItem("gg_user"))

  let doesLike = false

  for (const like of giffygramLikes) {
    if (postId === like.postId && currentUser === like.userId) {
      doesLike = true
    } 
  }
  return doesLike
} ////// end function to see if currentUser has liked a post, allows yellow star to render

////// function to find like.id in order to unfavorite post in API and render back to blank star
const findLikeId = (postId) => {
  const giffygramLikes = getLikes()
  const currentUser = parseInt(localStorage.getItem("gg_user"))

  let id = null

  for (const like of giffygramLikes) {
    if (postId === like.postId && currentUser === like.userId) {
      id = like.id
    } 
  }
  return id
} ////// end function to find like.id in order to unfavorite post in API and render back to blank star

export const Post = (post, user) => {

  let postListElement = `
    <li id="post--${post.id}" class="post">
      <h2 class="post__title">${post.title}</h2>
      <br>
      <img class="post__image" src="${post.url}"/>
      <br>
      <body class="post__tagline">${post.story}</body>
      <br>
      <body class="post__remark">Posted by <a id="postedBy--${user.id}" class="fakeLink" "value="postedBy">${user.email}</a> on ${post.date}</body>
      <br>
      <section class="post__actions">`

      if (userLikesPost(post.id)) {
        postListElement += `<input type="submit" id="favorite--${post.id}" class="actionIcon favoriteButton yellowStar" value=""/>`
      } else {
        postListElement += `<input type="submit" id="unfavorite--${post.id}" class="actionIcon favoriteButton blankStar" value=""/>`
      }
      
      postListElement +=  `<img id="blockPost--${post.id}" class="actionIcon" src="../images/block.svg"/>
      </section>
    </li>
  `
  return postListElement
} 