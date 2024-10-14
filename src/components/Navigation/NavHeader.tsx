import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
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
    <div>
      {bookedMentoringSessionsVisible && (
        <BookedMentoringSessionsList
          onModalClose={hideBookedMentoringSessions}
        />
      )}

      <header id="main-header">
        <h1>MentorMe</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sessions">Book a Mentoring Session</NavLink>
            </li>
            <li>
              <Button onClick={showBookedMentoringSessions}>
                Booked Mentoring Sessions
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
