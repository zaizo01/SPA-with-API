<template>
    <div class="p-10 text-xl text-white">
        <p class="text-2xl">Lista de Usuarios</p>
        <ul class="p-6 text-gray-900 bg-white rounded-lg">
            <router-link tag="li" :to="{ name: 'InfoUser', params: { id: user.id } }" v-for="user in users" :key="user"
                class="border-b-2 border-gray-900">
                <a>{{ user.name}}</a>
            </router-link>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                users: {}
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(resp => {
                    return resp.json()
                })
                .then(users => {
                    this.users = users;
                })
        },
    }
</script>