import { Session } from "../../store/sessions-context";
import Button from "../UI/Button";

interface MentoringSessionProps {
  session: {
    id: Session["id"];
    title: Session["title"];
    shortDescription: Session["shortDescription"];
    date: Session["date"];
    durationInMinutes: Session["durationInMinutes"];
    visual: Session["visual"];
  };
}

export default function MentoringSession({ session }: MentoringSessionProps) {
  return (
    <span className="session-item">
      <img src={session.visual} alt={session.title} />
      <div className="session-data">
        <div>
          <h3>{session.title}</h3>
          <p>{session.shortDescription}</p>
          <p>{session.date}</p>
          <p>{session.durationInMinutes} minutes</p>
        </div>
        <p className="actions">
          <Button to={session.id}>Details</Button>
        </p>
      </div>
    </span>
  );
}
