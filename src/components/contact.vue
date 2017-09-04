<template>
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-12 medium-6">
                <h1>{{ title }}</h1>
                <p>{{ tagline }}</p>

                <form action="https://formspree.io/info@casloeffen.nl" method="POST">
                    <div class="grid-x">
                        <div class="cell medium-6">
                            <label>Name
                                <input type="text" name="name" placeholder="Your name">
                            </label>
                        </div>
                        <div class="cell medium-6">
                            <label>Email
                                <input type="email" name="_replyto" placeholder="Your email">
                            </label>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="cell medium-12">
                            <label>Message
                                <textarea name="message" placeholder="Your message"></textarea>
                            </label>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="cell medium-12">
                            <button type="submit" class="button button-primary">Stuur</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
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
                slug: 'contact',
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
