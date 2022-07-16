export namespace Page {
  export interface IPageValue {
    pageKey: string;
    title: string;
    backgroundColor: string;
    backgroundImage: string;
    isBodyScrollUse: boolean;
    lifeCycle: ILifeCycle;
    statusBar: IStatusBarOption;
  }

  export interface IStatusBarOption {
    backgroundColor: string;
    statusBarThemeDark: boolean;
  }
  export interface ILifeCycle {
    mount: ITargetPath[];
    unMount: ITargetPath[];
  }
}

export interface ITargetPath {
  target: {
    targetClass: "level|premium|default";
    level: number;
    targetPath: string;
    targetKey: string;
  };
  targetElse: {
    targetPath: string;
    targetKey: string;
  };
}

export interface IWidgetConfig {
  widgetCategory: string;
  description: string;
  descriptionImage: string;
  possiblePosition: string[];
  availablePage: string[];
  widgetIcon: string;
  clientWidth: number;
  clientHeight: number;
}

export interface IWidgetCommonStyle {
  widthFull: boolean;
  heightFull: boolean;
  width: number;
  height: number;
  position: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  radiusTopLeft: number;
  radiusTopRight: number;
  radiusBottomLeft: number;
  radiusBottomRight: number;
  borderColor: string;
  borderColorOpacity: number;
  borderWidth: number;
  shadowPosition: number;
  shadowColor: string;
  shadowWeight: number;
  shadowOpacity: number;
  shadowBlurRadius: number;
  animType: number;
  animDuration: number;
  animDelay: number;
  animInfinite: boolean;
  animFrom: number;
  animTo: number;
  spin: number;
}

export interface IWidgetOption {}
