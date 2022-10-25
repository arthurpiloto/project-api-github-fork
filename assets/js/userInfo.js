'use strict'

const user = localStorage.getItem('user')

// Import das funções
import { getUserInfo, getUserInfoRepos } from "./fetchUserInfo.js"
import { createDiv, createSpan, createImg } from "./utils/createElements.js"

const userInfoRepos = await getUserInfoRepos(user)
const userInfo = await getUserInfo(user)

const createRepos = (json) => {
    const contentContainer = document.querySelector('.content-container')
    const reposContainer = document.querySelector('.repos-container')

    json.forEach(element => {
        const reposName = createSpan('repost-name', `Repositório: ${element.name}`)
        const reposLink = createSpan('repos-link', `Link do repositório: ${element.html_url}`)
        reposContainer.appendChild(reposName)
        reposContainer.appendChild(reposLink)
        contentContainer.appendChild(reposContainer)
    });
}

createRepos(userInfoRepos)

const createProfile = (json) => {
    
}

// createProfile(userInfo)