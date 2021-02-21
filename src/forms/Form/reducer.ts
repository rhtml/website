import { FieldState, IReducerAction } from './types';
import validateFields from './validateFields';

const formReducer = (fieldState: FieldState, action: IReducerAction): FieldState => {
  let reducedFieldState = { ...fieldState };

  const {
    type,
    payload,
    hasSubmitted,
  } = action;

  switch (type) {
    case 'UPDATE_FIELDS': {
      reducedFieldState = {
        ...reducedFieldState,
        ...payload,
      };
      break;
    }
    case 'REPLACE_FIELDS': {
      reducedFieldState = payload;
      break;
    }
    default: {
      break;
    }
  }

  if (hasSubmitted) {
    const validatedFields = validateFields(reducedFieldState);
    reducedFieldState = validatedFields;
  }

  return reducedFieldState;
};

export default formReducer;
