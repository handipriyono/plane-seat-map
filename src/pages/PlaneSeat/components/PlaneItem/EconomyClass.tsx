import { TDataObjItem, TItem } from "../../types/index";
import ItemBox from "./ItemBox";
import usePlaneSeatStore from "../../stores/planeSeat.store";
import ItemPath from "./ItemPath";

const EconomyClass = ({ data }: TDataObjItem) => {
  const selectedSeat = usePlaneSeatStore((state) => state.selected);
  const lengthIndex = Object?.values(data)?.length;

  return (
    <div>
      <div className="title-class">Economy class</div>

      <div className="flex-between">
        <div className="label-red left">Exit</div>
        <div className="label-red right">Exit</div>
      </div>

      {Object?.entries(data)?.map(([, itemList], idx) => {
        const item = (x: TItem) => {
          return {
            item: x,
            boxId: "box-economy-class",
            seatNumber: x?.seat_number,
            isOccupied: x?.occupied,
            isActive: selectedSeat?.id === x?.id,
          };
        };

        return (
          <>
            <div key={itemList?.[0]?.id} style={{ position: "relative" }}>
              <div className="box-number">{itemList?.[0]?.number}</div>

              <div className="row-line">
                <div className="line-wrap">
                  <ItemBox {...item(itemList?.[0])} />
                  <ItemBox {...item(itemList?.[1])} />
                  <ItemBox {...item(itemList?.[2])} />
                </div>

                <ItemPath
                  isFirst={idx === 0}
                  isLast={lengthIndex === idx + 1}
                />

                <div className="line-wrap">
                  <ItemBox {...item(itemList?.[3])} />
                  <ItemBox {...item(itemList?.[4])} />
                  <ItemBox {...item(itemList?.[5])} />
                  <ItemBox {...item(itemList?.[6])} />
                </div>

                <ItemPath
                  isFirst={idx === 0}
                  isLast={lengthIndex === idx + 1}
                />

                <div className="line-wrap">
                  <ItemBox {...item(itemList?.[7])} />
                  <ItemBox {...item(itemList?.[8])} />
                  <ItemBox {...item(itemList?.[9])} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default EconomyClass;
