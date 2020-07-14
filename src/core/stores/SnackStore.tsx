import {observable, action} from 'mobx';

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
  }

  @action
  info(id: string) {
    this.type = SnackType.INFO;
    this.titleId = id;
  }

  @action
  success(id: string) {
    this.type = SnackType.SUCCESS;
    this.titleId = id;
  }

  @action
  clearSnack = () => {
    this.titleId = '';
  };
}
