import { Component, Vue } from 'vue-property-decorator';

@Component
export class routeToHomePage extends Vue {
  routeToHomePage(): void {
    if (this.$route.path !== '/home') {
      this.$router.push('/home');
    }
  }
}
