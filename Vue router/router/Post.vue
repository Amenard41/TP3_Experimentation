<template>
    <div v-if="post">
        <h4>{{ post.title }}</h4>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useRoute, useRouter } from "vue-router"
    import { testPosts } from '../testPosts.js'
    export default {
        beforeRouteEnter(to, from, next) {
            console.log(to, from)
            next('/posts')
        },

        computed: {
            post() {
                return testPosts.find(
                    x => x.id === parseInt(this.$route.params.id)
                )
            }
        }
        // setup() {
        //     const route = useRoute()
        //     console.log(route.params)

        //     const post = computed(() => {
        //         return testPosts.find(
        //             x => x.id === parseInt(route.params.id)
        //         )
        //     })

        //     return { 
        //         post
        //     }
        // }
    }
</script>

<style scoped>

</style>