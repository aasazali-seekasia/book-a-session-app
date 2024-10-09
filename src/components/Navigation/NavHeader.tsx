import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import BookedMentoringSessions from "../Sessions/BookedMentoringSession";
import BookedMentoringSessionsList from "../Sessions/BookedMentoringSessionsList";

export default function NavHeader() {
  const [bookedMentoringSessionsVisible, setBookedMentoringSessionsVisible] =
    useState(false);

  const showBookedMentoringSessions = () => {
    setBookedMentoringSessionsVisible(true);
  };

  const hideBookedMentoringSessions = () => {
    setBookedMentoringSessionsVisible(false);
  };

  return (
    <>
      {bookedMentoringSessionsVisible && (
        <BookedMentoringSessionsList onClose={hideBookedMentoringSessions} />
      )}

      <header id="nav-header" className="main-header">
        <h1>MentorMe</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Book a Mentoring Session
              </NavLink>
            </li>
            <li>
              <Button onClick={showBookedMentoringSessions}>
                Booked Mentoring Sessions
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
