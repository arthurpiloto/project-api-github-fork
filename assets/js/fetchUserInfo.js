const getUserInfo = async (username) => {
    const user = username

    const url = `https://api.github.com/users/${user}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const getUserInfoRepos = async (username) => {
    const user = username

    const url = `https://api.github.com/users/${user}/repos`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export {
    getUserInfo,
    getUserInfoRepos
}