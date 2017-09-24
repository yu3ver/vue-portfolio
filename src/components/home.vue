<template>
    <div class="main">
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

        <div class="grid-container">
            <div class="grid-x">
                <div class="small-12 cell home-text">
                    <h1 class="title" v-html="title"></h1>
                    <h2 class="tagline">{{ tagline }}</h2>
                    <hr>
                    <router-link :to="{ path: '/portfolio' }" class="button button-primary">Bekijk mijn werk</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            story: {
                content: {
                    body: []
                }
            },
            title: '',
            tagline: ''
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
                slug: 'home',
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
                    this.tagline = data.story.content.body[0].tagline
                })
            })
        }
    }
}
</script>
