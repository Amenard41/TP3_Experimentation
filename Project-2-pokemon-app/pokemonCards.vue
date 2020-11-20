<template>
    <div>
        <div class="cards">
            <card 
             v-for="pokemon in pokemons" 
            @click="click(pokemon)"
            :class="{ opace: selectedId && pokemon.id !== selectedId }">
                <template v-slot:title>
                    {{ pokemon.name }} # {{ pokemon.id }}
                </template>
                <template v-slot:content>
                    <img :src="pokemon.sprite">
                </template>
                <template v-slot:description>
                    <div v-for="type in pokemon.types">
                        {{ type }}
                    </div>
                </template>
            </card>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        components: {
            Card
        },

        props: {
            pokemons: {
                type: Array
            },
            selectedId: {
                type: Number
            }
        }, 

        methods: {
            click(pokemon) {
                this.$emit('pokemonClicked', pokemon)
            }
        }
        
    }
</script>

<style scoped>
    .cards {
        display: flex;
    }

    img { 
        max-width: 100%;
    }

    .card:hover { 
        opacity: 1;
    }

    .opace { 
        opacity: 0.5;
    }
</style>