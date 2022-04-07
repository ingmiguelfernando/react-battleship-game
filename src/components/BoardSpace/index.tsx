import React, { useState } from "react";
import Icons from "../Icon/sprite.svg";

export const BoardSpace = () => {
  const [state, setState] = useState(undefined);

  return (
    <div className="w-1 h-1 border bg-blue2-400 rounded p-3 cursor-help">
      {state && (
        <svg className={`icon icon-${state}`} width={100} height={100}>
          <use xlinkHref={`${Icons}#icon-${state}`} />
        </svg>
      )}
    </div>
  );
};
