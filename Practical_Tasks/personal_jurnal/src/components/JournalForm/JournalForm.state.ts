import type { JournalFormData } from "../../types";

interface FormValidity {
  post: boolean;
  title: boolean;
  date: boolean;
}

export interface FormState {
  isValid: FormValidity;
  values: JournalFormData;
  isFormReadyToSubmit: boolean;
}

type SetValueAction = {
  type: "SET_VALUE";
  payload: Partial<JournalFormData>;
};

type ClearAction = {
  type: "CLEAR";
};

type ResetValidityAction = {
  type: "RESET_VALIDITY";
};

type SubmitAction = {
  type: "SUBMIT";
};

export type FormAction =
  | SetValueAction
  | ClearAction
  | ResetValidityAction
  | SubmitAction;

export const INITIAL_STATE = {
  isValid: {
    post: true,
    title: true,
    date: true,
  },
  values: {
    post: "",
    title: "",
    date: "",
    tag: "",
    userId: 1,
  },
  isFormReadyToSubmit: false,
} satisfies FormState;

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, values: { ...state.values, ...action.payload } };
    case "CLEAR":
      return {
        ...state,
        values: INITIAL_STATE.values,
        isFormReadyToSubmit: false,
      };
    case "RESET_VALIDITY":
      return { ...state, isValid: INITIAL_STATE.isValid };
    case "SUBMIT": {
      const titleValidity = Boolean(state.values.title.trim().length);
      const postValidity = Boolean(state.values.post.trim().length);
      const dateValidity = Boolean(state.values.date);
      return {
        ...state,
        isValid: {
          post: postValidity,
          title: titleValidity,
          date: dateValidity,
        },
        isFormReadyToSubmit: titleValidity && postValidity && dateValidity,
      };
    }
    default:
      return state;
  }
}
