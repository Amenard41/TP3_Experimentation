<template>
    <div>
        <h4>Hello from posts</h4>
        <router-link
          v-for="post in testPosts"
          :to="`/posts/${post.id}`">
            {{ post.title }}
        </router-link>
        <router-view />
    </div>
</template>

<script>
import { watchEffect } from 'vue'
    import { useRoute, useRouter } from "vue-router"
    import { testPosts } from '../testPosts.js'

    export default {
        // watch: {
        //     '$route': {
        //         handler: (val, oldVal) => {
        //             console.log(val)
        //             this.fetchData(val.params.id)
        //         },
        //         immediate: true
        //     }
        // },

        setup() {
            const route = useRoute()
            watchEffect(() => {
                console.log(route.params)
            })
            return {
                testPosts
            }
        }
    }
</script>

<style scoped>

</style>