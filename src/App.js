import React from "react";

import "./App.css"
import ChatContainer from "./Components/Chat/ChatContainer/ChatContainer";
import SignInUpContainer from "./Components/SignInUpContainer/SignInUpContainer";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WithAuth from "./WithAuth";


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<SignInUpContainer />} />
        <Route path="/chat" element={<NavigationBar />}>
          <Route index element={<WithAuth><ChatContainer /></WithAuth>} />
        </Route>
        <Route path="*" element={<Navigate to='/chat' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
