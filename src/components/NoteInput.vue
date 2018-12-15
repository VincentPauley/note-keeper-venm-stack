<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">New Note</h5>
            <form>
                <div class="form-group">
                    <label>Note Title</label>
                    <input type="text" class="form-control" v-model="note_title">
                </div>

                <div class="form-group">
                    <label>Note Body</label>
                    <textarea class="form-control" v-model="note_body"></textarea>    
                </div>

                <div id="button-wrapper" class="form-group">
                    <button type="button" class="btn btn-primary pull-right" v-on:click="handle_new_note_submit">Add Note</button>    
                </div>    
            </form>
        </div>
    </div>
</template>

<script>

    import { EventBus } from '../event-bus.js';

    export default {
        name: 'note',
        data() {
            return {
                note_title: '',
                note_body: ''
            };
        },
        methods: {
            /**
             * @function handle_new_note_submit
             * 
             * Emits content of note through the event bus and clears contents of the form
             * for the next update.
             */
            handle_new_note_submit() {

                // emit note details to root through the event bus
                EventBus.$emit( 'new-note', { title: this.note_title, body: this.note_body } );
            
                // clear note contents
                this.note_title = '';
                this.note_body = '';
            }
        }
    }
</script>

<style>

    #button-wrapper {
        text-align: right;
    }
</style>