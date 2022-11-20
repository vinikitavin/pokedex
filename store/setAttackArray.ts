import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { store } from '@/store';

@Module({
  name: 'setAttackArray',
  namespaced: true,
  stateFactory: true,
  dynamic: true,
  store
})
export default class SetAttackArray extends VuexModule {
  storeMinAttack: number = 5
  storeMaxAttack: number = 165
  storeAttackArray: Array<any> = []

  get GetMinAttack(): number {
    return this.storeMinAttack;
  }

  get GetMaxAttack(): number {
    return this.storeMaxAttack;
  }

  get GetAttackArray(): Array<any> {
    return this.storeAttackArray;
  }

  @Mutation
  setMinAttack(minAttack: number): void {
    this.storeMinAttack = minAttack;
  }

  @Mutation
  setMaxAttack(maxAttack: number): void {
    this.storeMaxAttack = maxAttack;
  }

  @Mutation
  setAttackArray(attackArray: Array<any>): void {
    this.storeAttackArray = attackArray;
  }

  @Action
  changeMinAttack(minAttack: number): void {
    this.setMinAttack(minAttack);
  }

  @Action
  changeMaxAttack(maxAttack: number): void {
    this.setMaxAttack(maxAttack);
  }

  @Action
  changeAttackArray(attackArray: Array<any>): void {
    this.setAttackArray(attackArray);
  }
}
