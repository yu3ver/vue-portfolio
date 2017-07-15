<template>
    <div class="row">
        <div class="twelve columns">
            <h1>{{ item.name }}</h1>
            <h2>{{ item.contribution }}</h2>
            <p>{{ item.description }}</p>
            <a :href="item.link">Link to project</a>
        </div>
    </div>
</template>

<script>

import Portfolio from '../portfolio.json'

export default {
    name: 'portfolio-item',
    data () {
        return {
            portfolio: Portfolio,
            msg: 'Portfolio item works.',
            item: null
        }
    },
    mounted: function () {
        this.item = this.getPortfolioItem()
    },
    methods: {
        getPortfolioItem: function () {
            return this.portfolio[this.$route.params.item]
        }
    }
}
</script>

<style>
</style>
