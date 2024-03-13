import { create } from "zustand";
import { TItem } from "../types";

const defaultState = {
  selected: {} as TItem,
  isModalActive: false,
  lastSubmitted: {} as TItem,
};

type TPlaneSeat = {
  selected: TItem;
  isModalActive: boolean;
  lastSubmitted: TItem;
  setSelectedSeat: (seat: TItem) => void;
  setIsModalActive: (isActive: boolean) => void;
  setLastSubmitted: (seat: TItem) => void;
};

const planeSeatStore = create<TPlaneSeat>((set) => ({
  ...defaultState,
  setSelectedSeat: (seat: TItem) => set({ selected: seat }),
  setIsModalActive: (isActive: boolean) => set({ isModalActive: isActive }),
  setLastSubmitted: (seat: TItem) => set({ lastSubmitted: seat }),
}));

export default planeSeatStore;
