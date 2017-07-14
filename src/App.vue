<template>
    <div id="app">
        <nav>
            <router-link :to="{ path: '/' }">Home</router-link>
            <router-link :to="{ path: '/about' }">About</router-link>
            <router-link :to="{ path: '/portfolio' }">Portfolio</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>

</style>
