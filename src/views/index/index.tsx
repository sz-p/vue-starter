import { defineComponent } from "vue";
const props = {};
export default defineComponent({
  name: 'Index',
  props,
  setup() {
    return () => (
      <>
        <div>helloworld</div>
        <router-link to="/about">about</router-link>
      </>
    );
  }
})