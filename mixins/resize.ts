import { Component, Vue } from 'vue-property-decorator';
import { vueWindowSizeMixin } from 'vue-window-size';

@Component
export class ResizeMixin extends Vue {
  protected isDesktop = false
  protected isTablet = false
  protected isMobile = false
  protected screenWidth: number = 0;

  protected definedScreenWidth(): void {
    this.screenWidth = vueWindowSizeMixin.computed.windowWidth();
    if (this.screenWidth <= 2680 && this.screenWidth > 1300) {
      this.isDesktop = true;
      this.isTablet = false;
      this.isMobile = false;
    }
    if (this.screenWidth <= 1300 && this.screenWidth >= 650) {
      this.isDesktop = false;
      this.isTablet = true;
      this.isMobile = false;
    }
    if (this.screenWidth < 650 && this.screenWidth >= 375) {
      this.isDesktop = false;
      this.isTablet = false;
      this.isMobile = true;
    }
  }

  mounted(): void {
    window.addEventListener('resize', this.definedScreenWidth);
    this.definedScreenWidth();
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', this.definedScreenWidth);
  }
}
