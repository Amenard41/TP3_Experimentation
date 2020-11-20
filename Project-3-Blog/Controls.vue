<template>
    <div>
        <div class="like">
            <button @click="like">
                Like
            </button>
            <div>
                {{ post.likes }}
            </div>
        </div>
        <hashtag 
          v-for="tag in post.hashtags" 
          :hashtag="tag" />
    </div>
</template>

<script>
    import { store } from './store.js' 
    import Hashtag from './Hashtag.vue'
    export default {
        components: {
            Hashtag
        },

        props: {
            post: {
                type: Object
            }
        }, 

        setup(props) {
            const like = () => {
                store.incrementLike(props.post)
            }

            return {
                like
            }
        }
    }
</script>

<style scoped>
    .like {
        display: flex;
        justify-content: center;
        margin: 10px;
    }
</style>