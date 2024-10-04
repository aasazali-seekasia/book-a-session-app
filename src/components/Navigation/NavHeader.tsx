import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <BookedMentoringSessions onClose={hideBookedMentoringSessions} />
      )}

      <header id="nav-header">
        <h1>MentorMe</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActivePage }) => (isActivePage ? "active" : "")}
              >
                Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActivePage }) => (isActivePage ? "active" : "")}
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
