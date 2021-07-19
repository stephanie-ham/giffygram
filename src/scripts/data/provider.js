const apiURL = "http://localhost:8088"

// const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    likes: [],
    messages: [],
    posts: []
}

export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
    .then(response => response.json())
    .then(
        (userRequest) => {
            applicationState.users = userRequest
        }
    )
}

export const fetchLikes = () => {
    return fetch(`${apiURL}/likes`)
    .then(response => response.json())
    .then(
        (likeRequest) => {
            applicationState.likes = likeRequest
        }
    )
}

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
    .then(response => response.json())
    .then(
        (messageRequest) => {
            applicationState.messages = messageRequest
        }
    )
}

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
    .then(response => response.json())
    .then(
        (postRequest) => {
            applicationState.posts = postRequest
        }
    )
}

export const getUsers = () => {
    return applicationState.users.map(user=>({...user}))
}

export const getLikes = () => {
    return applicationState.likes.map(like=>({...like}))
}

export const getMessages = () => {
    return applicationState.messages.map(message=>({...message}))
}

export const getPosts = () => {
    return applicationState.posts.map(post=>({...post}))
}