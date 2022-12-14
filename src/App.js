import React from "react";
import "./App.css";
import { Navbar, Sidebar, PlaylistModal } from "./component";
import { History, Liked, Login, Playlist, Signup, SingleVideo, VideoListing, WatchLater, PlaylistList, UserProfile, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./component/PrivateRoute/PrivateRoute";
import { useData } from "./context/data/videoContext";
import { useTheme } from "./context/theme/themeContext";
import { ForgetPwd } from "./pages/Auth";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme === "light" ? "light-theme" : "default-theme"}`}>
      <PlaylistModal />
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="*" element={<Error />} />
          <Route path="/video/:videoId" element={<SingleVideo />} />
          <Route
            path="/playlist"
            element={
              <PrivateRoute>
                <Playlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlist/:playListId"
            element={
              <PrivateRoute>
                <PlaylistList />
              </PrivateRoute>
            }
          />
          <Route
            path="/liked"
            element={
              <PrivateRoute>
                <Liked />
              </PrivateRoute>
            }
          />
          <Route
            path="/watchLater"
            element={
              <PrivateRoute>
                <WatchLater />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPwd" element={<ForgetPwd />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
