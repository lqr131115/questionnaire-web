import component from "./component";
import propComponent from "./propComponent";
import { IQNComponent } from "..";
import { QNCheckboxDefaultProps } from "./interface";
import { ReactComponent as CheckboxSvg } from "@/assets/svg/checkbox.svg";
export * from "./interface";

export const qnCheckboxType = "qnCheckbox";

const QNCheckboxMaterial: IQNComponent = {
  title: "多选",
  type: qnCheckboxType,
  icon: CheckboxSvg,
  component,
  propComponent,
  props: QNCheckboxDefaultProps,
};

export default QNCheckboxMaterial;
