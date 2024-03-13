import { ArrowDown, ArrowUp } from "../../../../commons/components/images";

type TItemPath = {
  isFirst?: boolean;
  isLast?: boolean;
};

const ItemPath = ({ isFirst, isLast }: TItemPath) => {
  return (
    <>
      <div className="line-wrap">
        <div className="path-wrapper">
          {isFirst && <ArrowUp />}
          {isLast && <ArrowDown />}
          {!isFirst && !isLast && <div className="line-path" />}
        </div>
      </div>
    </>
  );
};

export default ItemPath;
