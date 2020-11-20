<template>
    <div>
        <img v-for="photo in currentAlbumPhotos" :src="photo.thumbnailUrl" />
    </div>
</template>

<script>
    export default {
        computed: {
            currentAlbumPhotos() {
                return this.$store.state.photos.currentAlbumPhotos
            }
        }
    }
</script>

<style scoped>

</style>