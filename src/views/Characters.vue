<template>
    <Button @btn-click="prevPage(characters.page)" v-show="characters.page>1" class="btn" text="Prev"/>
    <Button @btn-click="nextPage(characters.page)" v-show="characters.page<6" class="btn" text="Next" />
    <h3>Character List</h3>
    <CharacterList :characters="characters" />
    <div>
        <h3>{{ characters.page }}</h3>
        <Button @btn-click="prevPage(characters.page)" v-show="characters.page>1" class="btn" text="Prev"/>
        <Button @btn-click="nextPage(characters.page)" v-show="characters.page<6" class="btn" text="Next" />
    </div>
</template>

<script>
import CharacterList from '../components/CharacterList.vue'
import Button from '../components/Button.vue'

export default {
    name: 'Characters',
    components: {
        CharacterList,
        Button
    },
    data() {
        return {
            defaultpage: 1,
            characters: []
        }
    },
    methods: {
        async prevPage(page) {
            page--
            this.characters = await this.fetchCharacters(page)
            window.scrollTo(0, 0)
        },
        async nextPage(page) {
            page++
            this.characters = await this.fetchCharacters(page)
            window.scrollTo(0, 0)
        },
        async fetchCharacters(page) {
            console.log(page)
            const res = await fetch(`/api/characters?page=${page}`)
            const data = await res.json()
            return data
        },
    },
    async created() {
        this.characters = await this.fetchCharacters(this.defaultpage)
        console.log(this.characters.results)
    }
}

</script>