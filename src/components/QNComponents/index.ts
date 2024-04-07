import { QNTitlePropsType } from "./QNTitle";
import { QNInputPropsType } from "./QNInput";

export type QNComponentProps = QNTitlePropsType | QNInputPropsType;
export type QNComponentType = "qnTitle" | "qnInput"; // 前后端一致

// export interface QNComponent {
//   title: string;
//   type: QNComponentType;
//   component: React.FC<any>;
//   props: QNComponentProps;
// }
