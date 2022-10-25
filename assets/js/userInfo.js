'use strict'

const user = localStorage.getItem('user')

// Import das funções
import { getUserInfo, getUserInfoRepos } from "./fetchUserInfo.js"
import { createDiv, createSpan, createImg, createLink } from "./utils/createElements.js"

const userInfoRepos = await getUserInfoRepos(user)
const userInfo = await getUserInfo(user)

const createRepos = (json) => {
    const contentContainer = document.querySelector('.content-container')
    const reposContainer = document.querySelector('.repos-container')

    json.forEach(element => {
        const reposName = createSpan('repos-name', `Repositório: ${element.name}`)
        const reposPrefix = createSpan('repos-prefixo', `Link do repositório: `)
        const reposLink = createLink('repos-link', `${element.html_url}`, element.html_url)
        const linkContainer = createDiv(`container-link`)
        linkContainer.appendChild(reposPrefix)
        linkContainer.appendChild(reposLink)
        reposContainer.appendChild(reposName)
        reposContainer.appendChild(linkContainer)
        contentContainer.appendChild(reposContainer)
    });
}

createRepos(userInfoRepos)

const createProfile = (json) => {
    const contentContainer = document.querySelector('.content-container')
    const profileContainer = document.querySelector('.profile-container')

    const userIcon = createImg('user-icon', json.avatar_url)
    const creationDate = createSpan('creation-date', `Data de criação: ${json.created_at}`)
    const followers = createSpan('user-followers', `Seguidores: ${json.followers}`)
    const following = createSpan('user-following', `Seguindo: ${json.following}`)
    const bio = createSpan('user-bio', `Bio: ${json.bio}`)

    profileContainer.appendChild(userIcon)
    profileContainer.appendChild(creationDate)
    profileContainer.appendChild(followers)
    profileContainer.appendChild(following)
    profileContainer.appendChild(bio)

    contentContainer.appendChild(profileContainer)
}

createProfile(userInfo)