export type QNRadioPropsType = {
  title: string;
  options: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
  vertical: boolean;
  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNRadioDefaultProps: QNRadioPropsType = {
  title: "单选",
  options: [],
  vertical: false,
};
