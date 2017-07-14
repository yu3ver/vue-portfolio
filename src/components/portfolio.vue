<template>
    <div>
        {{ msg }}
        <hr>
        <div v-for="item in portfolio">
            {{ item.name }}<br>
            {{ item.description }}<br>
            <a v-bind:href="item.link">link to project.</a>

            <hr>
        </div>
    </div>
</template>

<script>

import Portfolio from '../portfolio.json'

export default {
    name: 'Portfolio',

    data () {
        return {
            msg: 'Portfolio works.',
            portfolio: Portfolio
        }
    }
}
</script>

<style>
</style>
