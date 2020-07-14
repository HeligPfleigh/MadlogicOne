import {observable, action, computed} from 'mobx';

import {SupportedThemes} from '../const';
import light from '../themes/light';
import darcula from '../themes/darcula';

const themeGetters: Record<string, any> = {
  light,
  darcula,
};

export default class ThemeStore {
  @observable
  themeName: SupportedThemes = SupportedThemes.LIGHT;

  @action
  setTheme(newTheme: SupportedThemes) {
    this.themeName = newTheme;
  }

  @computed
  get theme() {
    return themeGetters[this.themeName];
  }
}
