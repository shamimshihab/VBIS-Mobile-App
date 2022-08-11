import { BUTTON_FONT_CHANGE, BODY_FONT_CHANGE, SUBTITLE_FONT_CHANGE } from "./fontConstants";

const initialState = {
    buttonSize: 17,
    bodySize: 20,
    subtitleSize: 30,
};

const fontReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_FONT_CHANGE:
            return {
            ...state,
            buttonSize: action.payload,
            };
        case BODY_FONT_CHANGE:
            return {
                ...state,
                bodySize: action.payload,
            };
        case SUBTITLE_FONT_CHANGE:
            return {
                ...state,
                subtitleSize: action.payload,
            };
        default:
            return state;
    }
};

export default fontReducer;