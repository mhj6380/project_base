import { action, makeObservable, observable } from "mobx";

export class AppStore {
  rootStore;
  isInit: boolean;
  isLoading: boolean | null;

  constructor(root: any) {
    makeObservable(this, {
      init: action,
      // isLoading: observable,
    });

    this.isLoading = true;
    this.isInit = false;
    this.rootStore = root;
  }

  async init() {
    this.isInit = true;
    this.isLoading = false;
  }
}
