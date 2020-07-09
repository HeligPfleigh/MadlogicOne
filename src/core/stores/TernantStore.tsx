import {observable, action, autorun} from 'mobx';

import {TabTypes} from '../const';
import NavigatorMap from '../../navigations/NavigatorMap';

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

  @action toggleTab = (status: boolean) => {
    this.enable = status;
  };
}

export default class TernantStore {
  @observable tabs = {
    [NavigatorMap.Broadcasts]: new Tab(TabTypes.NEWS),
    [NavigatorMap.Channels]: new Tab(TabTypes.CHANNEL),
    [NavigatorMap.HTML]: new Tab(TabTypes.HTML),
    [NavigatorMap.Programs]: new Tab(TabTypes.PROGRAMS),
  };

  constructor() {
    autorun(() => {
      this.tabs[NavigatorMap.HTML].toggleTab(false);
    }, {});
  }

  // @action
  // loadTernantTabSetting = (setting: any) => {
  //   // TODO
  //   this.tabs[3].toggleTab(false);
  // };
}
