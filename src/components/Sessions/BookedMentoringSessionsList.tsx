import { useEffect, useRef } from "react";
import { Session, useSessionContext } from "../../store/sessions-context";
import BookedMentoringSession from "./BookedMentoringSession";
import Modal, { ModalHandler } from "../UI/Modal";
import Button from "../UI/Button";

interface BookedMentoringSessionsListProps {
  onModalClose: () => void;
}

export default function BookedMentoringSessionsList({
  onModalClose,
}: BookedMentoringSessionsListProps) {
  const modal = useRef<ModalHandler>(null);
  const sessionsContext = useSessionContext();

  useEffect(() => {
    modal.current?.open();
  }, []);

  const sessions = sessionsContext.bookedMentoringSessions;

  function handleCancelBooking(id: Session["id"]) {
    sessionsContext.cancelMentoringSession(id);
  }

  const hasSessionBeenBooked = sessions.length > 0;

  return (
    <Modal ref={modal} onClose={onModalClose}>
      {hasSessionBeenBooked && (
        <ul>
          {sessions.map((session) => (
            <li key={session.id}>
              <BookedMentoringSession
                session={session}
                onCancel={() => handleCancelBooking(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessionBeenBooked && <p>No booked sessions</p>}
      <p className="actions">
        <Button onClick={onModalClose}>Close</Button>
      </p>
    </Modal>
  );
}
