import ItemPath from "./PlaneItem/ItemPath";

const InfoSymbol = () => {
  return (
    <>
      <div className="symbol-wrapper">
        <div className="section-symbol-item bold">Info</div>

        <div className="section-symbol-item">
          <div className="text-info">Map Position</div>
          <div>
            <img src="./plane.svg" height="30px" />
          </div>
        </div>

        <div className="section-symbol-item">
          <div className="text-info">Available seat</div>
          <div>
            <div className="box-general box-economy-class small">X</div>
          </div>
        </div>

        <div className="section-symbol-item">
          <div className="text-info">Occupied seat</div>
          <div>
            <div className="box-general box-economy-class occupied small">
              X
            </div>
          </div>
        </div>

        <div className="section-symbol-item">
          <div className="text-info">Selected seat</div>
          <div>
            <div className="box-general box-economy-class small active">X</div>
          </div>
        </div>

        <div className="section-symbol-item">
          <div className="text-info">Aisle path walk</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ItemPath />
            <ItemPath isFirst />
            <ItemPath isLast />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <div className="text-info">Exit door</div>
          <div>
            <div className="label-red small right">Exit</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSymbol;
