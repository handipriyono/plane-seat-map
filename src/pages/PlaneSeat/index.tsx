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
import InfoUser from "./components/InfoUser";

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "100px",
            fontWeight: "bold",
            paddingTop: "15px",
            justifyContent: "space-between",
            fontSize: "16px",
            alignItems: "center",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src="./seat.png" alt="seat" height="50px" />
            <h2 style={{ paddingLeft: "10px" }}> Select your seat</h2>
          </div>
          <div></div>
        </div>
        <InfoSymbol />
        {/* <InfoUser /> */}
        <div
          style={{
            width: "500px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="header-plane">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "flex-end",
                width: "100%",
                marginRight: "80px",
                marginLeft: "80px",
                justifyContent: "space-between",
              }}
            >
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "flex-end",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ paddingLeft: "100px" }}>
                <img src="./people.png" />
              </div>
              <div style={{ paddingRight: "100px" }}>
                <img src="./people.png" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
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
