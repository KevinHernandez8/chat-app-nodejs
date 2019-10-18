const store = require('./store')

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list')
    }

    const chat = {
        users: users
    }

    return store.add(chat)
}

function getChats(userId) {
    if (!userId) {
        Promise.reject('Invalid user id')
    }
    return store.list(userId)
}

module.exports = {
    addChat,
    getChats
}