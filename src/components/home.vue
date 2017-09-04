<template>
    <div class="main">
        <div class="grid-container">
            <div class="grid-x">
                <div class="small-12 cell home-text">
                    <h1 class="title" v-html="title">   </h1>
                    <h2 class="tagline">{{ tagline }}</h2>
                    <hr>
                    <router-link :to="{ path: '/portfolio' }" class="button button-primary">View my work</router-link>
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
            accessToken: 'm1KihoDPUQ5Q0clW19Xo5Qtt'
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
