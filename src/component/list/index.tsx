import { MouseEvent } from "react";
import { Point } from "../../types/types";

type Props = {
  points: Point[];
  onListItemHover: (listItemName: string) => void;
};

function List({ points, onListItemHover }: Props) {
  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <ul className="list">
      {points.map((point, index) => {
        const keyValue = `${index}-${point.title}`;

        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={handleListItemHover}
          >
            {point.title}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
