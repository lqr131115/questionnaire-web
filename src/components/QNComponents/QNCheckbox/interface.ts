// TODO: CheckboxOptionType 和 RadioOptionType整合成一个OptionType
export type CheckboxOptionType = {
  value: string;
  label: string;
  checked?: boolean;
};

export type QNCheckboxPropsType = {
  title: string;
  options: CheckboxOptionType[];
  defaultValue?: any;
  vertical: boolean;
  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNCheckboxDefaultProps: QNCheckboxPropsType = {
  title: "单选",
  options: [
    { value: "itemA", label: "选项A", checked: false },
    { value: "itemB", label: "选项B", checked: false },
    { value: "itemC", label: "选项C", checked: false },
  ],
  vertical: false,
};
