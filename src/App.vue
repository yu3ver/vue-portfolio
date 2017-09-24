<template>
    <div id="app">

        <main-menu></main-menu>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            msg: 'Nothing here.'
        }
    }
}
</script>
