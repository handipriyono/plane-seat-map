export type TItem = {
  id: string;
  class: string;
  seat_number: string;
  price: number;
  occupied: boolean;
  number?: string | number;
  letter?: string;
};

export type TDataObjItem = {
  data: {
    [key: string]: Array<TItem>;
  };
};

export type TArrayItem = Array<TItem>;

export type TBoxItem = {
  seatNumber: string;
  isOccupied: boolean;
  isActive: boolean;
  boxId: string;
  item: TItem;
};

export type TMutateSeat = {
  onSuccessCB: () => void;
};

export type TObjItem = {
  [key: string]: Array<TItem>;
};
