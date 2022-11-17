import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { store } from '@/store';

@Module({
  name: 'preloader',
  namespaced: true,
  stateFactory: true,
  dynamic: true,
  store
})
export default class Preloader extends VuexModule {
  loadingStatus = false

  @Mutation
  setLoadingStatus(statusValue: boolean): void {
    this.loadingStatus = statusValue;
  }

  @Action
  changeLoadingStatus(statusValue: boolean): void {
    this.context.commit('setLoadingStatus', statusValue);
  }
}
