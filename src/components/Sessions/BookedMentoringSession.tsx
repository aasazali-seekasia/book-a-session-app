

interface BookedMentoringSessionProps {
    session: {
        id: string;
        title: string;
        description: string;
        date: Date;
        time: string;
    }
    onCancel: (sessionId: string) => void;
}

export default BookedMentoringSession = (
  props: BookedMentoringSessionProps
) => {
    const [bookedSessions, setBookedSessions] = useState<bookedSessions>([])

    return (
    <div>
        <h4>Booked Mentoring Sessions</h4>
    </div>
    );
};
