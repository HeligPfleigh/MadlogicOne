import {observable, action} from 'mobx';
import {persist} from 'mobx-persist';

import {TabTypes, Logo, Registration, TernantSetting} from '../const';
import NavigatorMap from '../../navigations/NavigatorMap';
import {AppTabParamsList} from '../../navigations/types';

class Tab {
  constructor(type: string, icon?: string, title?: string) {
    this.type = type;
    this.icon = icon;
    this.title = title;
    this.enable = true;
  }

  @observable type: string;
  @observable icon?: string;
  @observable title?: string;
  @observable enable: boolean;
}

type ITabs = Record<keyof AppTabParamsList | string, Tab>;

export default class TernantStore {
  @persist('object')
  @observable
  tabs: ITabs = {
    [NavigatorMap.Broadcasts]: new Tab(TabTypes.NEWS),
    [NavigatorMap.Channels]: new Tab(TabTypes.CHANNEL),
    [NavigatorMap.HTML]: new Tab(TabTypes.HTML),
    [NavigatorMap.Programs]: new Tab(TabTypes.PROGRAMS),
  };

  @persist
  @observable
  name?: string;

  @persist
  @observable
  secret?: string;

  @persist('object')
  @observable
  registration?: Registration;

  @persist('object')
  @observable
  logo?: Logo;

  @persist
  @observable
  color?: string;

  @persist
  @observable
  about?: string;

  @persist('list')
  @observable
  features?: string[];

  @action
  loadTernantTabSetting = (setting: TernantSetting) => {
    this.name = setting.name;
    this.secret = setting.secret;
    this.registration = setting.registration;
    this.logo = setting.logo;
    this.color = setting.color;
    this.about = setting.about;
    this.features = setting.features;

    Object.keys(this.tabs).forEach((key) => {
      this.tabs[key].enable = false;
      const tabData = setting.tabs.find(
        ({type}) => type === this.tabs[key].type,
      );
      if (tabData) {
        this.tabs[key] = new Tab(key, tabData.icon, tabData.title);
      }
    });
  };
}
