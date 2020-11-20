<template>
    <button 
    :style="{ background: background, color: color  }"
    :class="{ 'disabled-button': disabled }">
        Button
    </button>
</template>

<script>
    export default {
        props: {
            color: {
                type: String
            },
            background: {
                type: String
            },  
            disabled: {
                type: Boolean
            }
        }  
    }
</script>

<style scoped>
    button {
        background: none;
        color: black;
        border: none;
        border-radius: 5px;
        padding: 10px 40px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover { 
        filter: brightness(125%);
    }

    .disabled-button { 
        opacity: 0.5;
    }

    button:disabled { 
        opacity: 0.5;
    }
</style>