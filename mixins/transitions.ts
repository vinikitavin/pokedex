import { Component, Mixins } from 'vue-property-decorator';
import { resizeMixin } from '~/mixins/resize';

@Component
export class transitions extends Mixins(resizeMixin) {
  isOpenedPokeCharactCard: boolean = false

  closeFilterMenu(): void {
    const filterMenuInput = document.getElementById('filter-menu') as HTMLElement | null;
    filterMenuInput!.checked = false;
    this.hideByShadow();
  }

  hideByShadow(): void {
    const burgerMenuInput = document.getElementById('side-menu') as HTMLElement | null;
    const filterMenuInput = document.getElementById('filter-menu') as HTMLElement | null;

    const bodyScrollHidden = document.querySelector('body') as HTMLElement | null;
    const shadowOfTheMain = document.getElementById('shadow-of-body') as HTMLElement | null;

    function hideShadow(): void {
      shadowOfTheMain!.style.display = 'none';
      bodyScrollHidden!.style.overflow = 'auto';
    }

    hideShadow();

    if (this.screenWidth <= 650) {
      if (burgerMenuInput!.checked === true) {
        burgerMenuInput!.checked = false;
        setTimeout(hideShadow, 200);
      } else {
        filterMenuInput!.checked = false;
        setTimeout(hideShadow, 200);
      }
    }

    if (this.isOpenedPokeCharactCard) {
      this.isOpenedPokeCharactCard = false;
    }
  }

  shadowOfBodyAndStopScrolling(): void {
    const bodyScrollHidden: HTMLElement | null = document.querySelector('body');
    const shadowOfTheMain: HTMLElement | null = document.getElementById('shadow-of-body');
    shadowOfTheMain!.style.display = 'block';
    bodyScrollHidden!.style.overflow = 'hidden';
  }

  routeToPagesByNuxtLink(): void {
    if (this.screenWidth <= 650) {
      this.hideByShadow();
    }
  }

  routeToHomePageByLogo(): void {
    const shadowOfTheMain: HTMLElement | null = document.getElementById('shadow-of-body');
    if (this.screenWidth <= 650) {
      if (shadowOfTheMain!.style.display === 'block') {
        this.hideByShadow();
        this.$router.push('/home');
      }
      this.$router.push('/home');
    }
    this.$router.push('/home');
  }
}
