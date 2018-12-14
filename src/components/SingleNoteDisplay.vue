<template>
    <div class="card">

        <div class="card-body">

            <h4>{{ note.title }}</h4>
            <p>{{ note.body }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'note' ]
    }
</script>

<style>
    div.card {
        margin-top: 10px;
    }
    p {
        color: #565656;
    }
</style>