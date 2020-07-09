import {observable, action} from 'mobx';
import {TabTypes} from '../const';

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

export default class TabsStore {
  @observable tabs = [
    new Tab(TabTypes.NEWS),
    new Tab(TabTypes.CHANNEL),
    new Tab(TabTypes.HTML),
    new Tab(TabTypes.PROGRAMS),
  ];

  // @action
  // loadTernantTabSetting = (setting: any) => {
  //   // TODO
  //   this.tabs[3].toggleTab(false);
  // };
}
