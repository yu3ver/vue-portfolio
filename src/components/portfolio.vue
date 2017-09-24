<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div v-for="(item, index) in portfolio" class="small-12 medium-6 cell">
                <router-link :to="{ path: `/portfolio/${item.slug}`, params: { id: index } }">
                    <div class="item">
                        <img :src="item.image" />
                        <div class="item-text" v-bind:style="{ backgroundColor: item.color }">
                            <div class="grid-x">
                                <div class="cell small-12 medium-6">
                                    <p class="contribution">{{ item.contribution }}</p>
                                </div>
                                <div class="cell small-12 medium-6">
                                    <p class="contribution">{{ item.techniques }}</p>
                                </div>
                            </div>
                            <h2>{{ item.title }}</h2>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
    data () {
        return {
            story: {
                content: {
                    body: []
                }
            },
            title: '',
            description: '',
            portfolio: []
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
                    this.title = data.story.content.body[0].title
                    this.description = data.story.content.body[0].description
                    this.portfolio = data.story.content.body
                })
            })
        }
    }
}
</script>
