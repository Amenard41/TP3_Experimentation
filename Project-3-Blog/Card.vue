<template>
    <div class="card">
        <div class="title">
            <slot name="title" />
        </div>
        <div class="content">
            <slot name="content" />
        </div>
        <div class="description">
            <slot name="description" />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .cards {
        display: flex;
    }

    .card {
        border: 1px solid silver;
        border-radius: 8px;
        max-width:  200px;
        margin: 0 10px;
        cursor: pointer;
        box-shadow: 0 1px 3px darkgrey;
        transition: 0.2s;
    }


    .title, .content, .description { 
        padding: 16px;
        text-transform: capitalize;
        text-align: center;
    }

    .title, .content { 
        border-bottom: 1px solid silver;
    }
    
    .title { 
        font-size: 1.25em;
    }
</style>