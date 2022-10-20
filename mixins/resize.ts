// import { Component, Vue } from 'vue-property-decorator';
// import { vueWindowSizeMixin } from 'vue-window-size';
//
// @Component
// class ResizeMixin extends Vue {
//   public isDesktop!: boolean
//   public isTablet!: boolean
//   public isMobile!: boolean
//
//   public definedResizeValues(): [boolean, boolean, boolean] | undefined {
//     const screenWidth: number = vueWindowSizeMixin.computed.windowWidth();
//     if (screenWidth > 1300) {
//       this.isDesktop = true;
//       this.isTablet = false;
//       this.isMobile = false;
//       return [this.isDesktop, this.isTablet, this.isMobile];
//     }
//     if (screenWidth > 767) {
//       this.isDesktop = false;
//       this.isTablet = true;
//       this.isMobile = false;
//       return [this.isDesktop, this.isTablet, this.isMobile];
//     }
//     if (screenWidth > 319) {
//       this.isDesktop = false;
//       this.isTablet = false;
//       this.isMobile = true;
//       return [this.isDesktop, this.isTablet, this.isMobile];
//     }
//   }
// }
// export default ResizeMixin;
