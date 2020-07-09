import {observable, action, computed} from 'mobx';

import {SupportedLanguages} from '../const';
import en from '../../assets/translations/en.json';
import vi from '../../assets/translations/vi.json';

const translationGetters: Record<string, any> = {
  en,
  vi,
};

export default class LanguageStore {
  @observable
  language: string = SupportedLanguages.EN;

  @action
  changeLanguage(newLanguage: string) {
    this.language = newLanguage;
  }

  @computed
  get messages() {
    return translationGetters[this.language];
  }
}
