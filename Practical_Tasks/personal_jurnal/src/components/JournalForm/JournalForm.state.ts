export interface FormValues {
  title: string;
  post: string;
  date: string;
  tag: string;
}

export interface FormValidation {
  title: boolean;
  post: boolean;
  date: boolean;
  tag: boolean;
}

export interface FormState {
  isValid: FormValidation;
  values: FormValues;
  isFormReadyToSubmit: boolean;
}

export type FormAction =
  | { type: "RESET_VALIDITY" }
  | { type: "SET_FIELD_VALUE"; field: keyof FormValues; value: string }
  | {
      type: "SET_FIELD_VALIDITY";
      field: keyof FormValidation;
      isValid: boolean;
    }
  | { type: "SET_ALL_VALIDITY"; isValid: FormValidation }
  | { type: "RESET_FORM" };

export const INITIAL_STATE: FormState = {
  isValid: {
    title: true,
    post: true,
    date: true,
    tag: true,
  },
  values: {
    title: "",
    post: "",
    date: "",
    tag: "",
  },
  isFormReadyToSubmit: false,
};

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "RESET_VALIDITY":
      return { ...state, isValid: INITIAL_STATE.isValid };
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
      };
    case "SET_FIELD_VALIDITY":
      return {
        ...state,
        isValid: { ...state.isValid, [action.field]: action.isValid },
      };
    case "SET_ALL_VALIDITY":
      return {
        ...state,
        isValid: action.isValid,
      };
    case "RESET_FORM":
      return INITIAL_STATE;
    default:
      return state;
  }
}
