import {Post} from "../feed/Post.js"
import {getLikes, getPosts, getUsers, getChosenUser, setChosenUser} from '../data/provider.js'

const applicationElement = document.querySelector(".giffygram")

export const FooterMap = () => {
    const users = getUsers()

    let html = `
    <div class="footer">
        <div class="footer__item">
        <label for="yearChoice">Posts Since </label>
            <select name="yearChoice" id="years">
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
        </div>
        <div class="footer__item">
            <label for="userChoice">Posts by User </label>
            <select name="userChoice" id="userChoice">
                ${
                    users.map((user) => userFilter(user)).join("")
                }
            </select>
        </div>
        <div class="footer__item">
                <label for="Favorites">Show Only Favorites</label>
                <input type="checkbox" class="checkbox" id="Favs" name="topic" value="Favorites">
        </div>
    </div>
        `
    return html
}

const userFilter = (user) => {
    if ( user.id === getChosenUser() ) { 
        return ` 
            <option value="${user.name}" id="userID__${user.id}" selected>
                ${user.name}
            </option>       
        `
    } else {
        return ` 
            <option value="${user.name}" id="userID__${user.id}">
                ${user.name}
            </option>       
        `
    }
}
  

  
  applicationElement.addEventListener('change', event => {
    if (event.target.id==="userChoice") {
    
        //Create Index
        const userIndex = event.target.options.selectedIndex
        const finalID = event.target.options[userIndex].id

      const [, userId] = finalID.split("__")
  
      setChosenUser(parseInt(userId))

      applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
      // set chosen user and render app
  
    }
  })