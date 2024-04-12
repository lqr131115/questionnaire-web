export type RadioOptionType = {
  value: string;
  label: string;
};

export type QNRadioPropsType = {
  title: string;
  options: RadioOptionType[];
  defaultValue?: any;
  vertical: boolean;
  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNRadioDefaultProps: QNRadioPropsType = {
  title: "单选",
  options: [
    { value: "A", label: "选项A" },
    { value: "B", label: "选项B" },
    { value: "C", label: "选项C" },
  ],
  vertical: false,
};
