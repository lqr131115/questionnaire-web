import QNTitle from "./QNTitle/component";
import QNInput from "./QNInput/component";

import { ReactComponent as ParagraphSvg } from "@/assets/svg/paragraph.svg";
import { ReactComponent as TextareaSvg } from "@/assets/svg/textarea.svg";
import { ReactComponent as RadioSvg } from "@/assets/svg/radio.svg";
import { ReactComponent as CheckboxSvg } from "@/assets/svg/checkbox.svg";

export const qncSvgMap: {
  [key: string]: any;
} = {
  paragraph: ParagraphSvg,
  textarea: TextareaSvg,
  radio: RadioSvg,
  checkbox: CheckboxSvg,
};

export { QNTitle, QNInput };
