import { createContext, useCallback, useReducer } from "react";
import { findAnimation } from "../utils";

// Create Context
const WatsonContext = createContext();

// Type
const type = {
  SECTION: "SECTION",
  ANIMATION_NAME: "ANIMATION_NAME",
  COLOR: "COLOR",
  THEME: "THEME",
};
const { SECTION, ANIMATION_NAME, COLOR, THEME } = type;

// Initial Value
const initialState = {
  section: "home",
  pageTransitionAnimation: {
    inClass: "pt-page-scaleUp",
    outClass: "pt-page-scaleDown",
  },
  color: "blue",
  theme: "dark",
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SECTION:
      return {
        ...state,
        section: payload,
      };
    case ANIMATION_NAME:
      return {
        ...state,
        pageTransitionAnimation: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

// Watson State
const WatsonState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sidebar Change
  const changeSection = useCallback((value) => {
    dispatch({
      type: SECTION,
      payload: value,
    });
  }, []);

  // Page Animation
  const pageAnimationChange = useCallback((value) => {
    let animation = findAnimation(value);
    dispatch({
      type: ANIMATION_NAME,
      payload: animation,
    });
  }, []);

  // Page Animation
  const colorChange = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  // Theme Dark / Light
  const changeThemeVersion = useCallback((value) => {
    dispatch({
      type: THEME,
      payload: value,
    });
  }, []);
  const { section, pageTransitionAnimation, color, theme } = state;
  return (
    <WatsonContext.Provider
      value={{
        section,
        changeSection,
        pageTransitionAnimation,
        pageAnimationChange,
        color,
        colorChange,
        changeThemeVersion,
        theme,
      }}
    >
      {children}
    </WatsonContext.Provider>
  );
};

export default WatsonState;
export { WatsonContext };
