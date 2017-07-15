<template>
    <div class="row">
        <div v-for="(item, index) in portfolio" class="six columns">
            {{ item.name }}<br>
            {{ item.description }}<br>

            <router-link :to="{ path: `/portfolio/${item.slug}`, params: { id: index } }">Link</router-link>

        </div>
    </div>
</template>

<script>

import Portfolio from '../portfolio.json'

export default {
    name: 'Portfolio',
    data () {
        return {
            portfolio: Portfolio
        }
    }
}
</script>

<style>
</style>
