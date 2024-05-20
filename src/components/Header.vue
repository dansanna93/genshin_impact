<template>
    <div>
        <h1> {{ title }}</h1>
        <a href="/">
            <img src="../assets/logo.png">
        </a>
        <Button class="btn"
        @btn-click="login()" 
        text="Login"/> <br>
        Not a member? <br>
        <Button class="btn" text="Register" /> <br>
        <Button class="btn"
        @btn-click="showCharacterList(1)"
        v-show="isLogged"
        text="Characters"/> 
        <Button class="btn"
        @btn-click="searchChar()"
        v-show="isLogged"
        text="Search"/>
    </div>
</template>

<script>
    import Button from './Button.vue';
    export default {
        name: 'Header',
        props: {
            title: 'String',
            isLogged: false
        },
        components: {
            Button
        },
        methods: {
            showCharacterList(page) {
                this.$router.push('/characters', page)
            },
            searchChar() {
                this.$router.push('/search')
            },
            login() {
                this.$router.push('/login')
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