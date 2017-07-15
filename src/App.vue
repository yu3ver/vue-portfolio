<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="two columns">
                    <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a>
                </div>
                <div class="two columns">
                    <router-link :to="{ path: '/' }">Home</router-link>
                </div>
                <div class="two columns">
                    <router-link :to="{ path: '/about' }">About</router-link>
                </div>
                <div class="two columns">
                    <router-link :to="{ path: '/portfolio' }">Portfolio</router-link>
                </div>
            </div>
        </div>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>

</style>
