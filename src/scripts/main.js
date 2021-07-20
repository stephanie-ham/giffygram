import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchPosts, fetchLikes, fetchUsers, fetchMessages} from "./data/provider.js"


const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    fetchPosts().then(
        fetchLikes().then(
            fetchUsers().then(
                fetchMessages().then(
                    () => {
                        const user = parseInt(localStorage.getItem("gg_user"))

                        if (user) {
                            applicationElement.innerHTML = GiffyGram()
                        } else {
                            applicationElement.innerHTML = LoginForm()
                        }
                    }
                )
            )
        )
    )
}



renderApp()

applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
    }
)

