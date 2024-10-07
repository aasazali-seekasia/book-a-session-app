import { Link, useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";

export default function SessionPage() {
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
        <Link to="/">Back to homepage?</Link>
      </main>
    );
  }

  return (
    <main id="session-page">
      <article>
        <header>
          <img src={loadedSession.visual} alt={loadedSession.title} />
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
              {/* Todo: Add button that opens "Book Session" dialog / modal */}
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.longDescription}</p>
      </article>
    </main>
  );
}
