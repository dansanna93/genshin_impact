<template>
    <div :key="character.id" v-for="character in characters.results">
        <Character :character="character"/>
    </div>
    
</template>

<script>
    import Character from './Character.vue'
    import Button from './Button.vue';
    export default {
        name: 'CharacterList',
        props: {
            characters: Object,
            page: Number
        },
        components: {
            Character,
            Button
        },
        methods: {
            async nextPage(page) {
                this.$router.push('/characters', page++)
                }
            }
        }
</script>