import { TDataObjItem, TItem } from "../../types/index";
import ItemBox from "./ItemBox";
import usePlaneSeatStore from "../../stores/planeSeat.store";
import ItemPath from "./ItemPath";

const FirstClass = ({ data }: TDataObjItem) => {
  const selectedSeat = usePlaneSeatStore((state) => state.selected);
  const lengthIndex = Object?.values(data)?.length;

  return (
    <div>
      <div className="title-class">First class</div>
      {Object?.entries(data)?.map(([, itemList], idx) => {
        const item = (x: TItem) => {
          return {
            item: x,
            boxId: "box-first-class",
            seatNumber: x?.seat_number,
            isOccupied: x?.occupied,
            isActive: selectedSeat?.id === x?.id,
          };
        };

        return (
          <>
            <div key={itemList?.[0]?.id} style={{ position: "relative" }}>
              <div className="box-number">{itemList?.[0]?.number}</div>

              <div style={{ position: "relative" }} className="row-line">
                <div className="line-wrap">
                  <ItemBox {...item(itemList?.[0])} />
                </div>

                <ItemPath
                  isFirst={idx === 0}
                  isLast={lengthIndex === idx + 1}
                />

                <div className="line-wrap">
                  <ItemBox {...item(itemList?.[1])} />
                  <ItemBox {...item(itemList?.[2])} />
                </div>

                <ItemPath
                  isFirst={idx === 0}
                  isLast={lengthIndex === idx + 1}
                />

                <div className="line-wrap">
                  <ItemBox {...item(itemList?.[3])} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FirstClass;
