<template>
  <div>
    <div>helloworld</div>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script lang="ts">
import { EmitsOptions, SetupContext } from "vue";
export default {
  setup(props, context: SetupContext<EmitsOptions>) {},
};
</script>