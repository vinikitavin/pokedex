import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { store } from '@/store';

@Module({
  name: 'setTypeValue',
  namespaced: true,
  stateFactory: true,
  dynamic: true,
  store
})
export default class SetTypeValue extends VuexModule {
  storeTypeValue: Array<string> = []

  get GetTypeValue(): Array<string> {
    return this.storeTypeValue;
  }

  @Mutation
  setTypeValue(storeValue: Array<string>): void {
    this.storeTypeValue = storeValue;
  }

  @Action
  changeTypeValue(storeValue: Array<string>): void {
    this.setTypeValue(storeValue);
  }
}
