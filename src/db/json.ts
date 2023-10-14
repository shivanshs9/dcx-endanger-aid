import type { IModel, ModelConstructor } from "@/models/base";

export class JsonDB {
  basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  async getListOf<T extends IModel>(item: string, classConstructor: ModelConstructor<T>): Promise<T[]> {
    const fileContents = await fetch([this.basePath, item].join("/"));
    const data = JSON.parse(await fileContents.text());
    return data.map((item: any, idx: number) => new classConstructor(idx + 1000, item));
  }
}
