import { Component, Vue } from 'vue-property-decorator';
import { vueWindowSizeMixin } from 'vue-window-size';

@Component
export class resizeMixin extends Vue {
  protected screenWidth: number = 0;

  protected definedScreenWidth(): void {
    this.screenWidth = vueWindowSizeMixin.computed.windowWidth();
  }

  mounted(): void {
    window.addEventListener('resize', this.definedScreenWidth);
    this.definedScreenWidth();
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', this.definedScreenWidth);
  }
}
