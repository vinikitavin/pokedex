import { Component, Mixins } from 'vue-property-decorator';
import { ResizeMixin } from '~/mixins/resize';

@Component
export class routeToPage extends Mixins(ResizeMixin) {
  hideBurgerMenu(): void {
    const burgerButton: HTMLElement | null = document.getElementById('hamb-button');
    const bodyScrollHidden: HTMLElement | null = document.querySelector('body');
    const shadowOfTheMain: HTMLElement | null = document.getElementById('shadow-of-body');
    burgerButton!.click();
    setTimeout(hideShadow, 200);

    function hideShadow(): void {
      shadowOfTheMain!.style.display = 'none';
      bodyScrollHidden!.style.overflow = 'auto';
    }
  }

  routeToPagesByNuxtLink(): void {
    if (this.isMobile) {
      this.hideBurgerMenu();
    }
  }

  routeToHomePageByLogo(): void {
    const shadowOfTheMain: HTMLElement | null = document.getElementById('shadow-of-body');
    if (this.isMobile) {
      if (shadowOfTheMain!.style.display === 'block') {
        this.hideBurgerMenu();
        this.$router.push('/home');
      }
      this.$router.push('/home');
    }
    this.$router.push('/home');
  }
}
