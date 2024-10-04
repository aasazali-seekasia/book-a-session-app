// Lecture 66, 67, : Creating a Context & Types

import { createContext, ReactNode, useContext, useReducer } from "react";

// Session type represents a mentoring session instance
export type Session = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  date: string;
  time: string;
  visual: string;
  durationInMinutes: number;
};

// SessionState holds the booked mentoring sessions
interface SessionState {
  bookedMentoringSessions: Array<Session>;
}

const initialState: SessionState = {
  bookedMentoringSessions: [],
};

// SessionContextValue is the context value that provides the booked mentoring sessions with actions to book and cancel a session
interface SessionContextValue extends SessionState {
  bookMentoringSession: (session: Session) => void;
  cancelMentoringSession: (sessionId: string) => void; // uses the session id to cancel a session
}

// SessionContext as a component is created with Context API
export const SessionContext = createContext<SessionContextValue | null>(null);

// useSessionContext is a custom hook that provides the SessionContext
export const useSessionContext = () => {
  const sessionsCtx = useContext(SessionContext);
  if (!sessionsCtx) {
    throw new Error("context should not be null!");
  }
  return sessionsCtx;
};

type BookSessionAction = {
  type: "BOOK_SESSION";
  session: Session;
};

type CancelSessionAction = {
  type: "CANCEL_SESSION";
  sessionId: Session["id"];
};

type SessionActions = BookSessionAction | CancelSessionAction;

function sessionReducer(
  state: SessionState,
  action: SessionActions
): SessionState {
  switch (action.type) {
    case "BOOK_SESSION":
      return state.bookedMentoringSessions.some(
        (session) => session.id === action.session.id
      )
        ? state
        : {
            bookedMentoringSessions: state.bookedMentoringSessions.concat(
              action.session
            ),
          };
    case "CANCEL_SESSION":
      return {
        bookedMentoringSessions: state.bookedMentoringSessions.filter(
          (session) => session.id !== action.sessionId
        ),
      };
    default:
      return state;
  }
}

type SessionContextProviderProps = { children: ReactNode };

export const SessionContextProvider = ({
  children,
}: SessionContextProviderProps) => {
  const [sessionState, dispatch] = useReducer(sessionReducer, initialState);

  const ctx: SessionContextValue = {
    bookedMentoringSessions: [],
    bookMentoringSession: (session: Session) => {
      dispatch({ type: "BOOK_SESSION", session });
    },
    cancelMentoringSession: (sessionId: string) => {
      dispatch({ type: "CANCEL_SESSION", sessionId });
    },
  };

  return (
    <SessionContext.Provider value={ctx}>{children}</SessionContext.Provider>
  );
};
