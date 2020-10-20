<template>
    <div>
        <nav class="flex justify-between p-4">
            <div class="text-2xl font-medium">
                <h1>Aplicacion Usuarios</h1>
            </div>
            <ul class="flex items-center pt-3">
                <router-link tag="li" to="/" active-class="border-b-4 border-blue-500" class="mr-4" exact><a>Inicio</a>
                </router-link>
                <router-link tag="li" to="/user" active-class="border-b-4 border-blue-500" exact><a>Usuarios</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {

    }
</script>


<style lang="">

</style>