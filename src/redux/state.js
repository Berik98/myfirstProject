let state = {
    profilePage : {
        posts:[
            {id: 1, post: '"It\'s my first project"', likesCount: 23},
            {id: 2, post: 'Good luck', likesCount: 15}
        ]
    },
    dialogsPage:{
        dialogsData : [
            {name: 'Berik', id: 1, avatar: 'https://i.imgur.com/QgUzuSF.jpg'},
            {
                name: 'Serik',
                id: 2,
                avatar: 'https://get.wallhere.com/photo/1600x1200-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635355.jpg'
            }],
        messagesData : [
            {id: 1, message: 'Hi', avatar: 'https://i.imgur.com/QgUzuSF.jpg'},
            {id: 2, message: 'How are you?', avatar: 'https://i.imgur.com/QgUzuSF.jpg'},
            {id: 3, message: 'What are you doing?', avatar: 'https://i.imgur.com/QgUzuSF.jpg'}]
    },
    sidebar:{
        friends: [
            {id: 1,
                name: 'Berik',
                avatar: 'https://i.imgur.com/QgUzuSF.jpg'
            },
            {id: 1,
                name: 'Serik',
                avatar: 'https://i.imgur.com/QgUzuSF.jpg'
            },
            {id: 1,
                name: 'Erik',
                avatar: 'https://i.imgur.com/QgUzuSF.jpg'
            }
        ]
    }
}
export default state;