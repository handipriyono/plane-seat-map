import { TDataObjItem, TItem } from "../../types";
import ItemBox from "./ItemBox";
import usePlaneSeatStore from "../../stores/planeSeat.store";
import ItemPath from "./ItemPath";

const BusinessClass = ({ data }: TDataObjItem) => {
  const selectedSeat = usePlaneSeatStore((state) => state.selected);
  const lengthIndex = Object?.values(data)?.length;

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="title-class">Business class</div>

      {Object?.entries(data)?.map(([, itemList], idx) => {
        const item = (x: TItem) => {
          return {
            item: x,
            boxId: "box-business-class",
            seatNumber: x?.seat_number,
            isOccupied: x?.occupied,
            isActive: selectedSeat?.id === x?.id,
          };
        };

        return (
          <div key={itemList?.[0]?.id} style={{ position: "relative" }}>
            <div className="box-number">{itemList?.[0]?.number}</div>
            <div className="row-line">
              <div className="line-wrap">
                <ItemBox {...item(itemList?.[0])} />
                <ItemBox {...item(itemList?.[1])} />
              </div>

              <ItemPath isFirst={idx === 0} isLast={lengthIndex === idx + 1} />

              <div className="line-wrap">
                <ItemBox {...item(itemList?.[2])} />
                <ItemBox {...item(itemList?.[3])} />
                <ItemBox {...item(itemList?.[4])} />
              </div>

              <ItemPath isFirst={idx === 0} isLast={lengthIndex === idx + 1} />

              <div className="line-wrap">
                <ItemBox {...item(itemList?.[5])} />
                <ItemBox {...item(itemList?.[6])} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessClass;
