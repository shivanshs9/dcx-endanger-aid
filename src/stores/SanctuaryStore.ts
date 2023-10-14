import DB from '@/db';
import { SanctuaryModel, Sanctuary } from '@/models/sanctuary';
import { NotFoundError, toError } from '@/utils/errors';

type IDictionary<TValue> = {
  [id: string]: TValue;
}

export class SanctuaryStore {
  private _state: IDictionary<Sanctuary>;

  constructor() {
    this._state = {};
  }

  async init() {
    const items = await DB.inventory.getListOf('sanctuaries.json', SanctuaryModel);
    this._state = items.reduce((map, item: Sanctuary) => {
      map[item.getId().toString()] = item;
      return map;
    }, this._state);
  }

  async fetchActiveSanctuaries(): Promise<Sanctuary[]> {
    const list = Object.values(this._state).filter((sanctuary: Sanctuary) => sanctuary.isActive());
    return Promise.resolve(list);
  }

  async getSanctuary(id: number): Promise<Sanctuary> {
    try {
      return this._state[id];
    } catch (e) {
      throw new NotFoundError(toError(e));
    }
  }
}

