import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/UI/Button.tsx";
import BookMentoringSessionForm from "../components/Sessions/BookMentoringSessionForm.tsx";
import { useState } from "react";
import { Session } from "../store/sessions-context.tsx";

export default function SessionPage() {
  const params = useParams<{ id: Session["id"] }>();
  const [isBooking, setIsBooking] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
        <Button to="/sessions">Sessions page?</Button>
      </main>
    );
  }

  function handleInitiateBooking() {
    setIsBooking(true);
  }
  function handleEndBooking() {
    setIsBooking(false);
  }

  return (
    <main id="session-page">
      {isBooking && (
        <BookMentoringSessionForm
          onDone={handleEndBooking}
          session={loadedSession}
        />
      )}
      <article>
        <header>
          <img
            src={loadedSession.visual}
            alt={loadedSession.title}
            loading="lazy"
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={handleInitiateBooking}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.longDescription}</p>
      </article>
    </main>
  );
}
