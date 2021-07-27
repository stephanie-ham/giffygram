import { getUsers } from "../data/provider.js"

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
        <div class="footer__item" id="Users">
            <label for="userChoice">Posts by User </label>
            <select name="userChoice" id="users">
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
    return ` 
        <option value="${user.name}">
            ${user.name}
        </option>       
    `
}

// applicationElement.addEventListener("change")

