import {observable, action} from 'mobx';
import noop from 'lodash/noop';

import {SnackType} from '../const';

interface Action {
  label: string;
  onPress: () => void;
}

const defaultAction = {
  label: '',
  onPress: noop,
};

export default class SnackStore {
  @observable
  type: SnackType = SnackType.INFO;

  @observable
  titleId: string = '';

  @observable
  action: Action = defaultAction;

  @action
  setError(id: string, newAction?: Action) {
    this.type = SnackType.ERROR;
    this.titleId = id;
    this.action = newAction || defaultAction;
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
