import type { IModel, ModelConstructor } from "./base";

export enum AnimalHealthStatus {
  Healthy = 'Healthy',
  Injured = 'Injured',
  Sick = 'Sick',
  Unknown = 'Unknown',
}

export enum AnimalHabitat {
  Land = 'Land',
  Sea = 'Sea',
  Air = 'Air',
  Unknown = 'Unknown',
}

export enum ConservationStatus {
  CriticallyEndangered = 'Critically Endangered',
  Endangered = 'Endangered',
  Vulnerable = 'Vulnerable',
  NearThreatened = 'Near Threatened',
  Unknown = 'Unknown',
}

export enum AnimalGender {
  Male = 'Male',
  Female = 'Female',
  Unknown = 'Unknown'
}

export class Animal implements IModel {
  private _id: number;
  species: string;
  name: string;
  age: number;
  gender: AnimalGender;
  healthStatus: AnimalHealthStatus;
  dateRescued: Date;
  habitat: AnimalHabitat;
  imageUrl?: string;
  description?: string;
  conservationStatus: ConservationStatus;

  private sanctuaryId: number

  constructor(id: number, item: any) {
    this._id = id;
    this.species = item.species;
    this.name = item.name || "Kawaii Fauna";
    this.age = item.age || 0;
    this.gender = item.gender || AnimalGender.Unknown;
    this.healthStatus = item.healthStatus || AnimalHealthStatus.Unknown;
    this.dateRescued = item.dateRescued || new Date((new Date()).getTime() - Math.random()*(1e+12));
    this.habitat = item.habitat || AnimalHabitat.Unknown;
    this.imageUrl = item.imageUrl || "https://placehold.co/600x400";
    this.description = item.description || "Lorem Ipsum";
    this.conservationStatus = item.conservationStatus || ConservationStatus.Unknown;

    this.sanctuaryId = item.sanctuaryId || 1000;
  }

  belongsTo = (sanctuaryId: number) => this.sanctuaryId == sanctuaryId;

  getId = () => this._id
}

export const AnimalModel: ModelConstructor<Animal> = Animal;