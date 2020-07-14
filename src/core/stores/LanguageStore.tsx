import {observable, action, computed} from 'mobx';
import {persist} from 'mobx-persist';

import {SupportedLanguages} from '../const';
import en from '../../assets/translations/en.json';
import vi from '../../assets/translations/vi.json';

const translationGetters: Record<string, any> = {
  en,
  vi,
};

export default class LanguageStore {
  @persist
  @observable
  language: SupportedLanguages = SupportedLanguages.EN;

  @action
  changeLanguage(newLanguage: SupportedLanguages) {
    this.language = newLanguage;
  }

  @computed
  get messages() {
    return translationGetters[this.language];
  }
}
