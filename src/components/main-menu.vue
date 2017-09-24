<template>
    <div class="grid-container">
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="menu">
                    <li class="menu-text">
                        <router-link :to="{ path: '/' }">Cas Loeffen</router-link>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu simple">
                    <li>
                        <router-link :to="{ path: '/' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/about' }">Over</router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/portfolio' }">Portfolio</router-link>
                    </li>
                    <!-- <li>
                        <router-link :to="{ path: '/contact' }">Contact</router-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-menu'
}
</script>
