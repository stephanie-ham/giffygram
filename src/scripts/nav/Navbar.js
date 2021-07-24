import { renderApp } from "../main.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id ==="logout") {
        localStorage.removeItem("gg_user")
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
    else if (clickEvent.target.name ==="home") {
        // document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        renderApp()
     }


})


export const NavBar = () => {
    return `
        <div class="navigation" id="directMessageIcon">
            <div class="navigation__icon" name="home" >
                <img class="navigation__icon" src="images/pb.png" alt="icon">
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

/* <div class="navigation__message"></div> */

// #directMessageIcon {
//     cursor: pointer;
// }