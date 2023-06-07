/**
 * Copyright (c) Ryan Martin. and affiliates.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ControllerModeProvider } from "./app/provider/ControllerModeProvider";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";

function App(): JSX.Element {
  return (
    <ControllerModeProvider>
      <RouterProvider router={router} />
    </ControllerModeProvider>
  );
}

export default App;
