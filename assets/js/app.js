'use strict'

import { getInfos } from "../../fetch.js"
import { createDiv, createImg, createSpan } from "./utils/createElements.js"
// var username = document.getElementById('username').value
// var infoData = await getInfos(username) // Essa linha dá o erro *** VM762:1 Uncaught SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON ***

// console.log(infoData)



let pageNumber = 1
const createCards =  async () => {
    let username = document.getElementById('username').value
    var infoData = await getInfos(username, pageNumber)

    infoData.items.forEach(element => {
        const container = document.querySelector('main')
        const card = createDiv('user-card')
        const usernameText = createSpan('user-name', element.login)

        card.appendChild(usernameText)
        container.appendChild(card)
    });
}

const handleKeyPress = (event) => {
    if(event.key == 'Enter') {
        createCards()
    }
}

document.getElementById('username')
        .addEventListener('keypress', handleKeyPress)

document.getElementById('button')
        .addEventListener('click', () => {
            pageNumber++
            createCards()
            console.log(pageNumber);
        })