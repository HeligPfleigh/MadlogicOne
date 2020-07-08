import {observable, action} from 'mobx';

export default class LanguageStore {
  @observable
  language: string = 'en';

  @action
  changeLanguage(newLanguage: string) {
    this.language = newLanguage;
  }
}
