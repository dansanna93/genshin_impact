<template>
    <div>
        <h1> {{ title }}</h1>
        <img src="../assets/logo.png">
        <Button class="btn"
        @btn-click="showCharacterList(1)"
        text="Characters"/> 
        <Button class="btn"
        @btn-click="$emit('show-banners')"
        text="Banners"/>
        <Button class="btn"
        @btn-click="$emit('search-characters')"
        text="Search"/>
    </div>
</template>

<script>
    import Button from './Button.vue';
    export default {
        name: 'Header',
        props: {
            title: 'String',
        },
        components: {
            Button
        },
        methods: {
            showCharacterList(page) {
                this.$router.push('/characters', page)
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>