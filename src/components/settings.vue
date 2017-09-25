<template>
    <div class="main">
        <div class="grid-container">
            <div class="grid-x">
                <div class="small-12 cell" v-if="loaded != false"> 
                    <h1 class="title">Settings</h1> 
					<div> 
						<h2>Home</h2>
                        <input type="text" @keyup.enter="updateTitle('home', $event.target.value)" :value="pages[2].title">
                        <input type="text" @keyup.enter="updateDescription('home', $event.target.value)" :value="pages[2].description">
					</div>
					<div>
						<h2>About</h2>
                        <input type="text" @keyup.enter="updateTitle('about', $event.target.value)" :value="pages[0].title">
                        <input type="text" @keyup.enter="updateDescription('about', $event.target.value)" :value="pages[0].description">
                        <input type="text" @keyup.enter="updateImage('about', $event.target.value)" :value="pages[0].image">
					</div>
					<div>
						<h2>Portfolio</h2>
						<div v-for="item in pages[3]">
							<div v-if="item.title != undefined">
								<h3>{{ item.title }}</h3>
                        		<input type="text" @keyup.enter="updateTitle(`portfolio/${item.slug}`, $event.target.value)" :value="item.title">
                        		<input type="text" @keyup.enter="updateSlug(`portfolio/${item.slug}`, $event.target.value)" :value="item.slug" disabled>
                        		<input type="text" @keyup.enter="updateDescription(`portfolio/${item.slug}`, $event.target.value)" :value="item.description">
                        		<input type="text" @keyup.enter="updateContribution(`portfolio/${item.slug}`, $event.target.value)" :value="item.contribution">
                        		<input type="text" @keyup.enter="updateTechniques(`portfolio/${item.slug}`, $event.target.value)" :value="item.techniques">
                        		<input type="text" @keyup.enter="updateColor(`portfolio/${item.slug}`, $event.target.value)" :value="item.color">
                        		<input type="text" @keyup.enter="updateImage(`portfolio/${item.slug}`, $event.target.value)" :value="item.image">
                        		<input type="text" @keyup.enter="updateLink(`portfolio/${item.slug}`, $event.target.value)" :value="item.link">
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'

// Initialize Firebase
let config = {
	apiKey: "AIzaSyB_wOy6-ZcdfUWbZ4JJlz4e7vdgWWpheCs",
    authDomain: "portfolio-website-db9cb.firebaseapp.com",
    databaseURL: "https://portfolio-website-db9cb.firebaseio.com",
    projectId: "portfolio-website-db9cb",
    storageBucket: "portfolio-website-db9cb.appspot.com",
    messagingSenderId: "294629847422"
};

let app = firebase.initializeApp(config);
let db = app.database();
let pageRef = db.ref('pages');
let homeRef = db.ref('pages/home');
let aboutRef = db.ref('pages/about');
let portfolioRef = db.ref('pages/portfolio');

export default {
    name: 'settings',
    data () {
        return {
			loaded: false,
            test: ''
        }
    },
	firebase: function () {
		return {
			pages: {
				source: pageRef,
				asObject: false,
				readyCallback: function () {
					this.loaded = true;
				}
			},
			home: {
				source: homeRef,
				asObject: true,
			},
			about: {
				source: aboutRef,
				asObject: true,
			},
			portfolio: {
				source: portfolioRef,
				asObject: true,
			}
		}
	},
	created () {
	},
    methods: {
        updateTitle: function (page, newText) { 
			pageRef.child(page).child('title').set(newText);
        },
        updateSlug: function (page, newText) { 
			pageRef.child(page).child('slug').set(newText);
		},
        updateDescription: function (page, newText) { 
			pageRef.child(page).child('description').set(newText);
		},
        updateContribution: function (page, newText) { 
			pageRef.child(page).child('contribution').set(newText);
		},
        updateTechniques: function (page, newText) { 
			pageRef.child(page).child('techniques').set(newText);
		},
        updateColor: function (page, newText) { 
			pageRef.child(page).child('color').set(newText);
		},
        updateImage: function (page, newText) { 
			pageRef.child(page).child('image').set(newText);
		},
        updateLink: function (page, newText) { 
			pageRef.child(page).child('link').set(newText);
		}
    }
}
</script>
