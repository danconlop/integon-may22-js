<template>
  <button @click="botonClick()">Click me!</button>
</template>
<script>

export default {
    data(){
        return {
            message: 'Mensaje del evento',
        }
    },
    methods: {
        botonClick: function() {
            this.$emit('TriggerNotification', this.message);
        }
    }    
}
</script>