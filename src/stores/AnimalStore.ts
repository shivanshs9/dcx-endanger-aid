import DB from '@/db';
import { NotFoundError, toError } from '@/utils/errors';
import { AnimalModel, Animal } from '@/models/animal';

type IDictionary<TValue> = {
  [id: string]: TValue;
}

export class AnimalStore {
  private _state: IDictionary<Animal>;

  constructor() {
    this._state = {};
  }

  async init() {
    const items = await DB.inventory.getListOf('animals.json', AnimalModel);
    this._state = items.reduce((map, item: Animal) => {
      map[item.getId().toString()] = item;
      return map;
    }, this._state);
  }

  async fetchAnimalsForSanctuary(sanctuaryId: number): Promise<Animal[]> {
    const list = Object.values(this._state).filter((animal: Animal) => animal.belongsTo(sanctuaryId));
    return Promise.resolve(list);
  }

  async getAnimal(id: number): Promise<Animal> {
    try {
      return this._state[id];
    } catch (e) {
      throw new NotFoundError(toError(e));
    }
  }
}

