import QNTitle from "./QNTitle/component";
import QNInput from "./QNInput/component";

import { ReactComponent as TitleSvg } from "@/assets/svg/title.svg";
import { ReactComponent as ParagraphSvg } from "@/assets/svg/paragraph.svg";
import { ReactComponent as InputSvg } from "@/assets/svg/input.svg";
import { ReactComponent as TextareaSvg } from "@/assets/svg/textarea.svg";
import { ReactComponent as RadioSvg } from "@/assets/svg/radio.svg";
import { ReactComponent as CheckboxSvg } from "@/assets/svg/checkbox.svg";

export const qncSvgMap: {
  [key: string]: any;
} = {
  title: TitleSvg,
  paragraph: ParagraphSvg,
  input: InputSvg,
  textarea: TextareaSvg,
  radio: RadioSvg,
  checkbox: CheckboxSvg,
};

export { QNTitle, QNInput };
