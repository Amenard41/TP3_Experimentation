import { createStore } from 'vuex'
import { testPosts } from '../testPosts.js'

const delay = () =>  new Promise(res => setTimeout(res, 1000))

const posts = {
    namespaced: true,
    state() {
        return {
            currentPost: null 
        }
    }, 

    mutations: {
        setPost(state, post) {
            state.currentPost = post
        } 
    }, 

    actions: {
        async fetchDataFromServer(ctx, id) {
            console.log(id)
            await delay()
            const post = testPosts.find(post => { 
                return post.id === id
            })
            console.log(post)

            ctx.commit('setPost', post)
        }
    }
}

export const store = createStore({
    modules: {
        posts
    }
})