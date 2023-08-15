import { useState } from "react";
import FullLog from "./DetailView/FullLog";
import PreviewLog from "./DetailView/PreviewLog";

const Details = ({ filteredLogs }) => {
  const [viewMore, setViewMore] = useState(
    Array(filteredLogs.length).fill(false)
  );

  const toggleView = (i) => {
    const updatedViewState = [...viewMore];
    updatedViewState[i] = !updatedViewState[i];
    setViewMore(updatedViewState);
  };

  return (
    <>
      {filteredLogs.map((log, index) =>
        !viewMore[index] ? (
          <PreviewLog key={log.id} log={log} index={index} toggleView={toggleView}/>
        ) : (
          <FullLog key={log.id} log={log} index={index} toggleView={toggleView}/>
        )
      )}
    </>
  );
};

export default Details;

