import { TBoxItem } from "../../types";
import usePlaneSeatStore from "../../stores/planeSeat.store";

const ItemBox = ({
  item,
  seatNumber,
  isOccupied,
  isActive,
  boxId,
}: TBoxItem) => {
  const setSelectedSeat = usePlaneSeatStore((state) => state.setSelectedSeat);
  const setIsModalActive = usePlaneSeatStore((state) => state.setIsModalActive);

  const onClickBox = () => {
    setSelectedSeat(item);
    setTimeout(() => {
      setIsModalActive(true);
    }, 150);
  };

  return (
    <div
      onClick={onClickBox}
      className={`box-general ${isOccupied ? "occupied" : ""} ${boxId}  ${
        isActive ? "active" : ""
      } `}
    >
      {seatNumber}
    </div>
  );
};

export default ItemBox;
