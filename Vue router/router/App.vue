<template>
    <div>
        <h3>Hello</h3>
        <router-link to="/hello">
            Hello
        </router-link>
        <router-link to="/posts">
            Posts
        </router-link>
        <div>
            <router-view />
        </div>
    </div> 
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>