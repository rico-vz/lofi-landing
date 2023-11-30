<template>
    <div v-if="config.showSnow" ref="snowEffect"></div>
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
        if (this.config.showSnow) {
            new LetItSnow({
                snowColor: "#ffffff",
                snowOpacity: "0.6",
                ns: 100,
                radius: 3,
                interval: 30,
                element: this.$refs.snowEffect
            });
        }
    }
};
</script>
  