<template>
  <div>
    <div class="about">about</div>
    <router-link to="/">back</router-link>
  </div>
</template>

<style lang="less" scoped>
@import "./aboutStyle";
</style>

<script lang="ts">
import { EmitsOptions, SetupContext } from "vue";
export default {
  setup(props, context: SetupContext<EmitsOptions>) {},
};
</script>