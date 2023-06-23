export const ADD_TITLE = 'ADD_TITLE'

const addTitle = (title) => {
    // console.log('Here 1', title);
    return {
        type: ADD_TITLE,
        title: title
    }
}

export {addTitle}