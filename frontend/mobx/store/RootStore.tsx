import { AppStore } from "./AppStore";

export class RootStore {
  appStore;

  constructor() {
    this.appStore = new AppStore(this);
  }
}
