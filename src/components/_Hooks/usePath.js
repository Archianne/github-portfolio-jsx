import { useState } from "react";
import createHistory from "history/createBrowserHistory";
const usePath = (path) => {
  const [link, setLink] = useState();
  const history = createHistory();

  const unlisten = history.listen((location) => {
    setLink(window.location.hash);
  });
  console.log(link);

  return [link, unlisten];
};

export default usePath;
