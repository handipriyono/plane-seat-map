import useGetDataSeat from "./hooks/useGetDataSeat";
import FirstClass from "./components/PlaneItem/FirstClass";
import BusinessClass from "./components/PlaneItem/BusinessClass";
import PremiumEconomy from "./components/PlaneItem/PremiumEconomy";
import EconomyClass from "./components/PlaneItem/EconomyClass";
import ModalInfo from "../PlaneSeat/components/ModalInfo";
import "./styles/component.css";
import "./styles/style.css";
import Header from "./components/Header";
import InfoSymbol from "./components/InfoSymbol";

const PlaneSeat = () => {
  const { data, onUpdateSeat, isLoadingMutate } = useGetDataSeat();

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Header />
        <div className="heading-wrapper">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src="./seat.png" alt="seat" height="50px" />
            <h2 style={{ paddingLeft: "10px" }}> Select your seat</h2>
          </div>
          <div></div>
        </div>
        <InfoSymbol />
        {/* <InfoUser /> */}
        <div className="plane-body">
          <div className="header-plane">
            <div className="people-header">
              <div>
                <img src="./people.png" />
              </div>
              <div>
                <img src="./people.png" />
              </div>
            </div>
          </div>

          <div className="exit-header">
            <div className="label-red left head">Exit</div>
            <div className="label-red right head">Exit</div>
          </div>

          <div className="outer-plane">
            <FirstClass data={data?.firstClass} />
            <BusinessClass data={data?.businessClass} />
            <PremiumEconomy data={data?.premiumEconomy} />
            <EconomyClass data={data?.economyClass} />
          </div>

          <div className="footer-plane">
            <div className="people-footer">
              <div style={{ paddingLeft: "100px" }}>
                <img src="./people.png" />
              </div>
              <div style={{ paddingRight: "100px" }}>
                <img src="./people.png" />
              </div>
            </div>
            <div className="flex-between">
              <div className="label-red left head">Exit</div>
              <div className="label-red right head">Exit</div>
            </div>
          </div>

          <ModalInfo onUpdateSeat={onUpdateSeat} isSubmit={isLoadingMutate} />
        </div>
      </div>
    </>
  );
};

export default PlaneSeat;
