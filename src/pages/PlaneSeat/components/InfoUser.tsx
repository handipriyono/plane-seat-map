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

        <div style={{ padding: "15px" }} className="small">
          <div style={{ width: "50%" }}>
            <div className="small">Hi, Handi Priyono</div>
          </div>
        </div>
        {lastSubmitted?.id && (
          <>
            <div style={{ padding: "15px" }} className="box-panel small">
              <div style={{ width: "50%" }}>
                <div className="title-item border-item small">
                  Submitted Class
                </div>
                <div className="title-item border-item small">
                  Submitted Seat
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <div className="border-item small">{lastSubmitted?.class}</div>
                <div className="border-item small">
                  {lastSubmitted?.seat_number}
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
