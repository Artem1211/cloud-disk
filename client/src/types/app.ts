export type AppState = {
  loader: boolean
}

export enum AppActionTypes {
  SHOW_LOADER = 'SHOW_LOADER',
  HIDE_LOADER = 'HIDE_LOADER',
}

type ShowLoaderAction = {
  type: AppActionTypes.SHOW_LOADER
}

type HideLoaderAction = {
  type: AppActionTypes.HIDE_LOADER
}

export type AppAction = ShowLoaderAction | HideLoaderAction
