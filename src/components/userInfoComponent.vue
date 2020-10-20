<template>
    <div class="p-20 my-10 bg-white rounded-lg">
        <h3 class="text-blue-500 uppercase">Informacion del usuario</h3>
        <div class="pb-2 text-sm font-medium">
            <p>Nombre: <span>{{ nombre }}</span></p>
            <p>Email: <span>{{ email }}</span></p>
        </div>
        <button class="px-6 py-3 text-white bg-blue-500 rounded outline-none" @click="back()">Volver</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nombre: '',
                email: ''
            }
        },
        methods: {
            back() {
                this.$router.push({
                    name: 'user'
                });
            }
        },
        created() {
            let id = this.$route.params.id
            this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
                .then(resp => {
                    return resp.json()
                })
                .then(user => {
                    this.nombre = user.name;
                    this.email = user.email;
                })
        },
    }
</script>