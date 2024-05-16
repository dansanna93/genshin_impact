<template>
    <div>
        <h1> {{ title }}</h1>
        <a href="/">
            <img src="../assets/logo.png">
        </a>
        <Button class="btn"
        @btn-click="showCharacterList(1)"
        text="Characters"/> 
        <Button class="btn"
        @btn-click="showSearch()"
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
            },
            showSearch() {
                this.$router.push('/search')
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