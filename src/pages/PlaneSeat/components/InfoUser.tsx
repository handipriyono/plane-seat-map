import usePlaneSeatStore from "../stores/planeSeat.store";
import { formatMoney } from "../../../commons/utils";

const InfoUser = () => {
  const lastSubmitted = usePlaneSeatStore((state) => state.lastSubmitted);

  return (
    <>
      <div className="info-user">
        <div className="header-title">
          <div className="title">Flight Info</div>
        </div>
        <div className="tujuan">CGK - KNO</div>
        {lastSubmitted?.id && (
          <>
            <div style={{ padding: "15px" }} className="box-panel small">
              <div style={{ width: "50%" }}>
                <div className="title-item border-item small">Class</div>
                <div className="title-item border-item small">Seat Number</div>
                <div className="title-item border-item small">Price</div>
              </div>
              <div style={{ width: "50%" }}>
                <div className="border-item small">{lastSubmitted?.class}</div>
                <div className="border-item small">
                  {lastSubmitted?.seat_number}
                </div>
                <div className="border-item small">
                  {formatMoney(lastSubmitted?.price)}
                </div>
              </div>
            </div>
            <div className="btn-submit">Lanjutkan</div>
          </>
        )}
      </div>
    </>
  );
};

export default InfoUser;
