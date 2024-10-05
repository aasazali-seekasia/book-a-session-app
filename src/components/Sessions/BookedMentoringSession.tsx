interface BookedMentoringSessionProps {
  session: {
    id: string;
    title: string;
    description: string;
    date: Date;
    durationInMinutes: number;
  };
  onCancel: () => void;
}

export default BookedMentoringSession = ({
  session,
  onCancel,
}: BookedMentoringSessionProps) => {
  const [bookedSessions, setBookedSessions] = useState<bookedSessions>([]);

  return (
    <article>
    <div>
      <h4>{session.title}</h4>
      <p>{session.description}</p>
      <time dateTime={session.date.toString()}>
        {session.date.toLocaleDateString('en-MY', {
            year: '2-digit',
            month: 'short',
            day: '2-digit',
        })}
      </time>
      <p>{session.durationInMinutes} minutes</p>
    </div>
    <Button textOnly onClick={() => onCancel()}>
        Cancel session
    </Button>
    </article>
  );
};
