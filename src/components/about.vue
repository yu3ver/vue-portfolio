<template>
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-12 item">
                <img :src="image" alt="">
                <div class="item-text about-text">
                    <div class="grid-x">
                        <div class="cell small-12 medium-8">
                            <h1>{{ title }}</h1>
                            <div v-html="description"></div>

                            <div class="grid-x">
                                <div class="cell small-4 medium-3 large-2">
                                    <a class="button button-secondary" href="https://github.com/cloeffen" target="_blank">Github</a>
                                </div>
                                <!--<div class="cell small-4 medium-3 large-2">-->
                                    <!--<a class="button button-secondary" href="https://behance.net/casloeffen" target="_blank">Behance</a>-->
                                <!--</div>-->
                                <div class="cell small-4 medium-3 large-2">
                                    <a class="button button-secondary" href="mailto:info@casloeffen.nl" target="_blank">E-mail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'About',
    data () {
        return {
            story: {
                content: {
                    body: []
                }
            },
            title: '',
            description: '',
            image: ''
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
                slug: 'about',
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
                    this.image = data.story.content.body[0].image
                })
            })
        }
    }
}
</script>
