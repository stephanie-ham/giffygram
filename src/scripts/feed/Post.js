import { deletePost, favoritePost } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")


applicationElement.addEventListener("click", clickEvent => {
  
  if (clickEvent.target.id.startsWith("blockPost--")) {
    const [, postId] = clickEvent.target.id.split("--")
    deletePost(parseInt(postId))
  }
  
  if (clickEvent.target.id.startsWith("favorite--")) {

    const [, postId] = clickEvent.target.id.split("--")
   // const userId = document.querySelector(".favoriteButton").value
   
   const data = { ////// need to figure out how to push a userId
     postId: parseInt(postId)
   }
   
   favoritePost(data)

   window.alert(`function is running`)

   const favoriteStar = clickEvent.target

   favoriteStar.classList.toggle("blankStar")
   favoriteStar.classList.toggle("yellowStar") // while paused, this toggles to yellowStar. Does not stick.

 }
})


// render page with stars already existing for liked, render with gold star
// toggle star: save or delete like if liked already, fetch to delete. if didn't like already, post to like the like
// after, state change



export const Post = (post, user) => {

  const postListElement = `
    <li id="post--${post.id}" class="post">
      <h2 class="post__title">${post.title}</h2>
      <br>
      <img class="post__image" src="${post.url}"/>
      <br>
      <body class="post__tagline">${post.story}</body>
      <br>
      <body class="post__remark">Posted by <a id="postedBy--${user.id}" class="fakeLink" "value="postedBy">${user.email}</a> on ${post.date}</body>
      <br>
      <section class="post__actions">
        <input type="submit" id="favorite--${post.id}" class="actionIcon favoriteButton blankStar" value=""/>
        <img id="blockPost--${post.id}" class="actionIcon" src="../images/block.svg"/>
      </section>
    </li>
  `
  return postListElement
} 




/////// TO DO ///////
// -- delete button should only render if active user is the poster -- //
// -- favorite button should render as yellow star when selected -- //
// -- push a userId to likes -- //

