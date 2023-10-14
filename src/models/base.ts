export interface IModel {
  getId(): number;
}

export interface ModelConstructor<T extends IModel> {
  new(id: number, item: any): T
}