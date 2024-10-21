import { Session } from "../../store/sessions-context";
import Button from "../UI/Button";

interface BookedMentoringSessionProps {
  session: {
    id: Session["id"];
    title: Session["title"];
    shortDescription: Session["shortDescription"];
    date: Session["date"];
    durationInMinutes: Session["durationInMinutes"];
  };
  onCancel: () => void;
}

export const BookedMentoringSession = ({
  session : { id, title, shortDescription, date, durationInMinutes },
  onCancel,
}: BookedMentoringSessionProps) => {
  return (
    <article>
      <div key={id}>
        <h4>{title}</h4>
        <p>{shortDescription}</p>
        <time dateTime={date.toString()}>
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
        <p>{durationInMinutes} minutes</p>
      </div>
      <Button onClick={onCancel}>Cancel session</Button>
    </article>
  );
};

export default BookedMentoringSession;
