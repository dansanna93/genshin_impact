<template>
    <div>
        <h3>{{ character.name }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'Character',
        props: {
          character: Object
        }
    }
</script>

