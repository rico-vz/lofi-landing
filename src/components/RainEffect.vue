<template>
    <div v-if="config.showRain" ref="rainEffect"></div>
</template>
  
<script>
export default {
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    mounted() {
        if (this.config.showRain) {
            new MakeItRain({
                numParticles: 24,
                maxParticleLength: 18,
                maxSpeed: 10,
                rainColor: "100, 150, 255",
                rainOpacity: 0.5,
                rainWidth: 1.25,
                interval: 2,
                element: this.$refs.rainEffect
            });
        }
    }
};
</script>
  