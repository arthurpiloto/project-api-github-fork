'use strict'

import { getUsers } from "./fetchUsers.js"
import { createDiv, createImg, createSpan } from "./utils/createElements.js"
// var username = document.getElementById('username').value
// var infoData = await getInfos(username) // Essa linha dá o erro *** VM762:1 Uncaught SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON ***

// console.log(infoData)



let pageNumber = 1

const createCards =  async () => {
    let username = document.getElementById('username').value
    var infoData = await getUsers(username, pageNumber)

    infoData.items.forEach(element => {
        const container = document.querySelector('.content-container')
        const card = createDiv('user-card', element.login.toLowerCase())
        const usernameText = createSpan('user-name', element.login)
        const userIcon = createImg('user-icon', element.avatar_url)

        card.appendChild(userIcon)
        card.appendChild(usernameText)
        container.appendChild(card)

        card.addEventListener('click', (e) => {
            e.preventDefault()

            const user = card.id

            localStorage.setItem('user', user)

            location.href = './assets/pages/user.html'
        })

    });
}

const clearCards = () => {
    const cards = document.querySelectorAll('.user-card')
    cards.forEach((card) => card.remove())
}

const handleKeyPress = (event) => {
    if(event.key == 'Enter') {
        clearCards()
        createCards()
    }
}

document.getElementById('username')
        .addEventListener('keypress', handleKeyPress)

document.getElementById('button')
        .addEventListener('click', () => {
            pageNumber++
            clearCards()
            createCards()
            console.log(pageNumber);
        })