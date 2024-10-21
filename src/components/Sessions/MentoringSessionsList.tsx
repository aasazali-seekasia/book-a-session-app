import { Session } from "../../store/sessions-context";
import MentoringSession from "./MentoringSession";

interface MentoringSessionsListProps {
  sessions: Array<Session>;
}

export function MentoringSessionsList({
  sessions,
}: MentoringSessionsListProps) {
  return (
    <ul>
      {sessions.map((session) => (
        <li key={session.id}>
          <MentoringSession session={session} />
        </li>
      ))}
    </ul>
  );
}

export default MentoringSessionsList;
