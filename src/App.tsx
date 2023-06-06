/**
 * Copyright (c) Ryan Martin. and affiliates.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ControllerModeProvider } from "./app/provider/ControllerModeProvider";
import AppBar from "./components/AppBar";
import Bound from "./components/Bound";
import Controller from "./components/Controller";
import MouseBlock from "./components/MouseBlock";
import ScrollBlock from "./components/ScrollBlock";

function App(): JSX.Element {
  return (
    <ControllerModeProvider>
      <AppBar />
      <Bound>
        <ScrollBlock />
      </Bound>
      <MouseBlock />
      <Controller />
    </ControllerModeProvider>
  );
}

export default App;
