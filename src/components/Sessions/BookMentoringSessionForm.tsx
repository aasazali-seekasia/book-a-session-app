import { FormEvent, forwardRef, useEffect, useRef } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Session, useSessionContext } from "../../store/sessions-context";
import Modal, { ModalHandler } from "../UI/Modal";

interface BookMentoringSessionFormProps {
  session: Session;
  onDone: () => void;
}

const BookMentoringSessionForm = forwardRef<
  HTMLFormElement,
  BookMentoringSessionFormProps
>(function BookMentoringSessionForm({
  session,
  onDone,
}: BookMentoringSessionFormProps) {
  const modal = useRef<ModalHandler>(null);
  const sessionsContext = useSessionContext();

  useEffect(() => {
    if (modal.current) modal.current?.open();
  });

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.info("Booking session form data:", data);
    sessionsContext.bookMentoringSession(session);
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h5>Book mentoring session</h5>
      <form onSubmit={handleFormSubmit}>
        <Input
          label="Name"
          id="name"
          inputElementProps={{ type: "text", name: "name" }}
          name="name"
        />
        <Input
          label="Email"
          id="email"
          inputElementProps={{ type: "email", name: "email" }}
          name="name"
        />
        <p>
          <Button onClick={onDone}>Cancel</Button>
          <Button>Book</Button>
        </p>
      </form>
    </Modal>
  );
});

export default BookMentoringSessionForm;
