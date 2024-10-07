import { Session } from "../../store/sessions-context";

interface MentoringSessionsListProps {
  sessions: Session[];
}

export function MentoringSessionsList({
  sessions,
}: MentoringSessionsListProps) {
  return (
    <ul>
      {sessions.map((session) => (
        <li key={session.id}>
          <h3>{session.title}</h3>
          <p>{session.shortDescription}</p>
          <p>{session.date}</p>
          <p>{session.durationInMinutes} minutes</p>
        </li>
      ))}
    </ul>
  );
}

export default MentoringSessionsList;
