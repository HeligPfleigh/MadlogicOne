import {observable, action, computed} from 'mobx';

import {SupportedThemes} from '../const';
import light from '../themes/light';

const themeGetters: Record<string, any> = {
  light,
};

export default class ThemeStore {
  @observable
  themeName: string = SupportedThemes.LIGHT;

  @action
  setTheme(newTheme: string) {
    this.themeName = newTheme;
  }

  @computed
  get theme() {
    return themeGetters[this.themeName];
  }
}
