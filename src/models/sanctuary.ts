import type { Addressable, AddressLike } from "ethers";
import type { IModel, ModelConstructor } from "./base";

import { AnimalStore } from "@/stores";

export class Sanctuary implements Addressable, IModel {
  private _id: number;
  name: string;
  image: string;
  location: {
    lat: number;
    long: number;
  };
  description: string;
  _walletAddress: AddressLike;
  _dateCreated: Date;

  constructor(id: number, item: any) {
    this._id = id;
    this.name = item.name || "";
    this.image = item.image || "https://placehold.co/600x400";
    this.location = {
      lat: item.location?.lat || -34.9120005,
      long: item.location?.long || -56.1670257,
    };
    this.description = item.description || "Lorem Ipsum";
    this._walletAddress = item.walletAddress;
  
    // assign randomized date to the _dateCreated property  
    this._dateCreated = new Date((new Date()).getTime() - Math.random()*(1e+12));
  }

  getAddress(): Promise<string> {
    return Promise.resolve(this._walletAddress as string);
  }

  listAnimals = async () => {
    const store = new AnimalStore()
    await store.init()
    return await store.fetchAnimalsForSanctuary(this._id);
  }

  howManyAnimals = async () => (await this.listAnimals()).length;

  slangHowOld(): string {
    // calculate the funny (spoken in a drunken old man fashion) age description of the sanctuary from this._dateCreated and the current date
    return "";
  }

  getId = () => this._id;

  isActive = () => true;
}

export const SanctuaryModel: ModelConstructor<Sanctuary> = Sanctuary;
