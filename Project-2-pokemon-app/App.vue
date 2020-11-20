<template>
    <div>
        <pokemon-cards 
        :pokemons="starters"
        :selectedId="selectedId"
        @pokemonClicked="fetchEvolutions" />

        <pokemon-cards :pokemons="evolutions" />

        
    </div>
</template>

<script>
    import Card from './Card.vue'
    import PokemonCards from './pokemonCards.vue'
    const api = 'https://pokeapi.co/api/v2/pokemon'
    const starterIds = [1, 4, 7]

    export default {
        components: {
            Card, 
            PokemonCards
        },

        data() {
            return {
                starters: [], 
                evolutions: [], 
                selectedId: null,
            }
        },

        async created() {
            const starters = await this.fetchData(starterIds)
            this.starters = starters
        },

        methods: {
            async fetchData(ids) {
                const responses = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)))
                const data = await Promise.all(responses.map(res => res.json()))
                return data.map(datum => ({
                    id: datum.id,
                    name: datum.name, 
                    sprite: datum.sprites.other['official-artwork'].front_default,
                    types: datum.types.map(type => type.type.name)
                }))
            }, 
            async fetchEvolutions(pokemon) {
                const evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
                this.selectedId = pokemon.id
                this.evolutions = evolutions;
            }, 
        }
    }
</script>

<style scoped>

</style>