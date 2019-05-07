const initState = {
  posts: [
      {id: 1, title: 'Polenta', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur atque consequuntur delectus, enim et facere fugit harum hic itaque neque nisi non optio pariatur placeat quia quidem reiciendis!'},
      {id: 2, title: 'Baked Fish', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur atque consequuntur delectus, enim et facere fugit harum hic itaque neque nisi non optio pariatur placeat quia quidem reiciendis!'},
      {id: 3, title: 'Pasta', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur atque consequuntur delectus, enim et facere fugit harum hic itaque neque nisi non optio pariatur placeat quia quidem reiciendis!'}
  ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => post.id !== action.id);
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
};

export default rootReducer;