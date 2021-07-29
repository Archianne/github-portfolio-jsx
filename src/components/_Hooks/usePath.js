import { useState } from "react";
import { createBrowserHistory } from "history";
const usePath = (path) => {
  const [link, setLink] = useState();
  const history = createBrowserHistory();

  const unlisten = history.listen((location) => {
    setLink(window.location.hash);
  });
  return [link, unlisten];
};

export default usePath;
