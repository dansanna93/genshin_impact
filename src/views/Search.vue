<template>
    <SearchCharacter @search-character="searchCharacter"/>
    <CharacterList :characters="characters"/>
</template>

<script>
import SearchCharacter from '@/components/SearchCharacter.vue'
import CharacterList from '@/components/CharacterList.vue'

export default {
    name: 'Search',
    props: {
        charAttributes: Object
    },
    data() {
        return {
            characters: []
        }
    },
    components: {
        SearchCharacter,
        CharacterList
    },
    methods: {
        async searchCharacter(charAttributes) {
            if (charAttributes.name) {
                const res = await fetch(`https://gsi.fly.dev/characters/search?name=${charAttributes.name.charAt(0).toUpperCase() + charAttributes.name.slice(1)}`)
                this.characters = await res.json()
            } else {
                const res = await fetch(`https://gsi.fly.dev/characters/search?rarity=${charAttributes.rarity}&vision=${charAttributes.vision}&weapon=${charAttributes.weapon}`)
                this.characters = await res.json()
                if (!this.characters) {
                    alert('No Characters Found!')
                }
            }
        }
    }
}
    
</script>