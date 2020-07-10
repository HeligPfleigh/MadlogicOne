import {observable, action} from 'mobx';

export default class AuthorizationStore {
  @observable
  isAuthorized: boolean = false;

  constructor() {
    // TODO: may be fetch authorized data from async storage here by autorun function
  }

  @action authorize = () => {
    this.isAuthorized = true;
  };

  @action logout = () => {
    this.isAuthorized = false;
  };
}
