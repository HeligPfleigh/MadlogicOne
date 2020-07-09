import {observable, action, runInAction} from 'mobx';

import {SnackType} from '../const';

export default class SnackStore {
  @observable
  type: SnackType = SnackType.INFO;

  @observable
  titleId: string = '';

  @action
  setError(id: string) {
    this.type = SnackType.ERROR;
    this.titleId = id;
    setTimeout(() => {
      runInAction(() => {
        this.titleId = '';
      });
    }, 2000);
  }
}
