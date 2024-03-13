import usePlaneSeatStore from "../stores/planeSeat.store";
import { useShallow } from "zustand/react/shallow";
import { useAPIGetSeatQuery, useAPIUpdateSeatQuery } from "./useApiPlaneQuery";
import { TItem, TObjItem } from "../types";

const useGetDataSeat = () => {
  const { dataSeat } = useAPIGetSeatQuery();

  const { mutate, isLoadingMutate } = useAPIUpdateSeatQuery({
    onSuccessCB: () => {
      setIsModalActive(false);
      setLastSubmitted(selectedSeat);
      setSelectedSeat({} as TItem);
      // setTimeout(() => {
      //   window.scrollTo(0, 0);
      // }, 2000);
    },
  });

  const {
    selectedSeat,
    setSelectedSeat,
    isModalActive,
    setIsModalActive,
    setLastSubmitted,
  } = usePlaneSeatStore(
    useShallow((state) => ({
      selectedSeat: state.selected,
      setSelectedSeat: state.setSelectedSeat,
      isModalActive: state.isModalActive,
      setIsModalActive: state.setIsModalActive,
      setLastSubmitted: state.setLastSubmitted,
    }))
  );

  const onSelectSeat = (seat: TItem) => {
    setSelectedSeat(seat);
  };

  const sortNumber = (data: Array<TItem>) => {
    try {
      return data?.sort((a, b) => {
        const seatNumberA = a?.seat_number;
        const seatNumberB = b?.seat_number;
        const [, numberA, letterA] = seatNumberA?.match(/(\d+)([A-Z]+)/) || [];
        const [, numberB, letterB] = seatNumberB?.match(/(\d+)([A-Z]+)/) || [];

        if (parseInt(numberA) !== parseInt(numberB)) {
          return parseInt(numberA) - parseInt(numberB);
        } else {
          return letterA?.localeCompare(letterB);
        }
      });
    } catch (error) {
      return data;
    }
  };

  const groupSeat = (arr: Array<TItem>) => {
    const groupedSeats: TObjItem = {};
    try {
      arr?.forEach((seat) => {
        const [, number, letter] =
          seat?.seat_number?.match(/(\d+)([A-Z]+)/) || [];
        if (!groupedSeats[number]) {
          groupedSeats[number] = [];
        }
        groupedSeats[number].push({
          number,
          letter,
          ...seat,
        });
      });
      return groupedSeats;
    } catch (error) {
      return groupedSeats;
    }
  };

  const filterData = ({ key }: { key: string }) => {
    return dataSeat?.filter((item: TItem) => item?.class === key);
  };

  const spreadClass = () => {
    const firstClass = filterData({ key: "first" });
    const businessClass = filterData({ key: "business" });
    const premiumEconomy = filterData({ key: "premium economy" });
    const economyClass = filterData({ key: "economy" });

    return {
      firstClass: groupSeat(sortNumber(firstClass)),
      businessClass: groupSeat(sortNumber(businessClass)),
      premiumEconomy: groupSeat(sortNumber(premiumEconomy)),
      economyClass: groupSeat(sortNumber(economyClass)),
    };
  };

  const onUpdateSeat = (item: TItem) => {
    mutate({
      id: item?.id,
      occupied: true,
    });
  };

  return {
    onSelectSeat,
    selectedSeat,
    isModalActive,
    setIsModalActive,
    isLoadingMutate,
    onUpdateSeat,
    data: {
      ...spreadClass(),
    },
  };
};

export default useGetDataSeat;
