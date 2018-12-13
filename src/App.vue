<template>
  <div class="container">
    <h1>{{ header }}</h1>

    <note-input></note-input>
  </div>
</template>

<script>

  import { EventBus } from './event-bus.js';

  import NoteInput from './components/NoteInput.vue';

  export default {
      data() {
          return {
              header: 'Note Keeper'
          };
      },
      components: { NoteInput },
      created() {

          EventBus.$on( 'new-note', noteDetails => {

              console.log( 'New Note in Root' );
              console.log( noteDetails );
          });
      }
  }
</script>

