export const ADD_TITLE = 'ADD_TITLE'

const addTitle = (title) => {

    return {
        type: ADD_TITLE,
        title: title
    }
}

export {addTitle}