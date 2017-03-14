<template>
    <div id="app2">
        <example></example>
        <mt-button @click.native="startHacking">Let's do it</mt-button>
    </div>
</template>

<script>
    import Example from './components/Example.vue';
    export default {
        name: 'mobile',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            startHacking () {
                this.$toast('It Works!');
            }
        },
        components: {
            Example
        }
    }
</script>

<style>
    #app2 {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>