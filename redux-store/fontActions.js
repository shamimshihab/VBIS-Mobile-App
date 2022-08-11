// import { INCREASE_FONT_SIZE } from "./fontConstants";
// import { DECREASE_FONT_SIZE } from "./fontConstants";
import { BUTTON_FONT_CHANGE, BODY_FONT_CHANGE, SUBTITLE_FONT_CHANGE } from "./fontConstants";

export const changeSize = (FONT_CHANGE, size) => {
   return {
     type: FONT_CHANGE === BUTTON_FONT_CHANGE ? BUTTON_FONT_CHANGE : (FONT_CHANGE === BODY_FONT_CHANGE ? BODY_FONT_CHANGE : SUBTITLE_FONT_CHANGE),
     payload: size,
   };
 };