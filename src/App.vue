<template>
    <div id="app">

        <main-menu></main-menu>
        <transition name="fade">
            <router-view></router-view>
        </transition>

        <vue-particles
            color="#000000"
            :particleOpacity="0.3"
            :particlesNumber="10"
            shapeType="triangle"
            :particleSize="8"
            linesColor="#000000"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.2"
            :linesDistance="150"
            :moveSpeed="1"
            :hoverEffect="false"
            :clickEffect="false">
      </vue-particles>
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
