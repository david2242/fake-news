export interface Event {
  _id: string,
  name: string,
  cause: string,
  nature: string,
  location?: Address,
  locationCode?: string,
  public: boolean,
  startTime: string,
  endTime: string,
  dressCode?: string
}

export interface Address {
  zip: string,
  city: string,
  address: string,
  floorDoor: string
}
