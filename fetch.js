'use strict'

const getInfos =  async (username, pageNumber) => {
    let user = username
    let page = pageNumber

    const url = `https://api.github.com/search/users?q=${user}&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    return data
}

export {
    getInfos
}