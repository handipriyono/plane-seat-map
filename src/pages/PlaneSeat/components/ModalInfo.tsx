import { useShallow } from "zustand/react/shallow";
import { useState } from "react";
import usePlaneSeatStore from "../stores/planeSeat.store";
import {
  capitalizeFirstLetter,
  formatMoney,
} from "../../../commons/utils/index";
import { TItem } from "../types";

type TOnsubmit = {
  onUpdateSeat: (x: TItem) => void;
  isSubmit: boolean;
};

const ModalInfo = ({ onUpdateSeat, isSubmit }: TOnsubmit) => {
  const [clickable, setclickable] = useState(false);

  const { selectedSeat, isModalActive, setIsModalActive } = usePlaneSeatStore(
    useShallow((state) => ({
      selectedSeat: state.selected,
      setSelectedSeat: state.setSelectedSeat,
      isModalActive: state.isModalActive,
      setIsModalActive: state.setIsModalActive,
    }))
  );

  const onClickCloseModal = () => {
    if (clickable) {
      setIsModalActive(false);
    }
  };

  return (
    <div
      id="myModal"
      onClick={onClickCloseModal}
      className={`modal ${isModalActive ? "active" : ""}`}
    >
      <div
        onMouseEnter={() => setclickable(false)}
        onMouseLeave={() => setclickable(true)}
        className="modal-content"
      >
        <div className="modal-header-title">
          <div style={{ color: "#fff", fontWeight: "bold" }}>Seat Info</div>
          <span
            onClick={() => setIsModalActive(false)}
            className="close"
            style={{ color: "#fff" }}
          >
            &times;
          </span>
        </div>

        <div className="box-panel">
          <div style={{ width: "50%" }}>
            <div className="title-item border-item">Class</div>
            <div className="title-item border-item">Seat Number</div>
            <div className="title-item border-item">Price</div>
          </div>
          <div style={{ width: "50%" }}>
            <div className="border-item">
              {capitalizeFirstLetter(selectedSeat?.class)}
            </div>
            <div className="border-item">{selectedSeat?.seat_number}</div>
            <div className="border-item">
              {formatMoney(selectedSeat?.price)}
            </div>
          </div>
        </div>

        {!selectedSeat?.occupied && (
          <div className="btn-wrapper-submit">
            <button
              onClick={() => onUpdateSeat(selectedSeat)}
              className="button-3"
              role="button"
              disabled={isSubmit}
            >
              Book this Seat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalInfo;
