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
                const res = await fetch(`/api/characters/search?name=${charAttributes.name.charAt(0).toUpperCase() + charAttributes.name.slice(1)}`)
                this.characters = await res.json()
            } else {
                const str = `/api/characters/search?rarity=${charAttributes.rarity}&vision=${charAttributes.vision}&weapon=${charAttributes.weapon}`
                const res = await fetch(`/api/characters/search?rarity=${charAttributes.rarity}&vision=${charAttributes.vision}&weapon=${charAttributes.weapon}`)
                this.characters = await res.json()
                console.log(this.characters)
                if (!this.characters) {
                    alert('No Characters Found!')
                }
            }
        }
    }
}
    
</script>