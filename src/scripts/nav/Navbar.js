import { resetAppState } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id ==="logout") {
        localStorage.removeItem("gg_user")
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    } else if (clickEvent.target.id ==="homeReturn") {
        resetAppState()
        
     }


})


export const NavBar = () => {
    return `
        <div class="navigation" id="directMessageIcon">
            <div class="navigation__icon" >
                <img class="navigation__icon" src="images/pb.png" alt="icon" id="homeReturn">
            </div>
            <div class="navigation__name">Giffygram</div>
            
            <div class="navigation__message > img" >
                <img class="navigation__icon" src="images/fountain-pen.svg" alt="cartoon pen">
                <div class="notification__count">0</div>
            </div>
            <div class="navigation__logout">
            <a href="#" id="logout">Logout</a>
            </div>
        </div>
    ` 
}

