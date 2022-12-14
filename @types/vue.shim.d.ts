import { Vue } from 'vue-property-decorator';

declare module '*.vue' {
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {}
}

declare module '@nuxt/types' {
  interface Context {}
}

declare module '@/types' {
  interface Vue {}
}

export {};
