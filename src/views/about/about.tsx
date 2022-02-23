import { defineComponent } from "vue";
import "./aboutStyle.less"
const props = {};
export default defineComponent({
    name: 'About',
    props,
    setup() {
        return () => (
            <div>
                <div class="about">about</div>
                <router-link to="/">back</router-link>
            </div>
        );
    }
})