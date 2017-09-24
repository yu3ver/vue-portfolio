<template>
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-12 item" v-if="item">
                <img :src="item.image" alt="">
                <div class="item-text" v-bind:style="{ backgroundColor: item.color }">
                    <div class="grid-x">
                        <div class="cell small-12 medium-6">
                            <p class="contribution">{{ item.contribution }}</p>
                        </div>
                        <div class="cell small-12 medium-6">
                            <p class="contribution">{{ item.techniques }}</p>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="cell small-12 medium-8">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.description }}</p>
                            <a :href="item.link.url" class="button button-secondary" target="_blank">Bekijk project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'portfolio-item',
    data () {
        return {
            item: null,
            portfolio: [],

            story: {
                content: {
                    body: []
                }
            },
            title: '',
            description: ''
        }
    },
    created () {
        window.storyblok.init({
            accessToken: '1kPxrkTRAU5YqwuzgFpZZAtt'
        })
        window.storyblok.on('change', () => {
            this.getStory('draft')
        })
        window.storyblok.pingEditor(() => {
            if (window.storyblok.isInEditor()) {
                this.getStory('draft')
            } else {
                this.getStory('published')
            }
        })
    },
    methods: {
        getPortfolioItem: function () {
            for (var i = 0; i < this.portfolio.length; i++) {
                if (this.portfolio[i].slug === this.$route.params.item) {
                    this.item = this.portfolio[i]
                }
            }
        },
        getStory (version) {
            window.storyblok.get({
                slug: 'portfolio',
                version: version
            }, (data) => {
                this.story = {
                    content: {
                        body: []
                    }
                }
                this.$nextTick(() => {
                    this.story = data.story
                    this.portfolio = data.story.content.body
                    this.getPortfolioItem()
                })
            })
        }
    }
}
</script>
