import { CheckBox } from "@rneui/base";
import React from "react";
import { COLORS } from "../../constants/Colors";

const CheckboxDefault = ({ title, onChange, checked, ...props }) => {
  return (
    <CheckBox
      containerStyle={{
        backgroundColor: "transparent",
        marginHorizontal: 0,
        marginLeft: -10,
        marginRight: -10,
      }}
      textStyle={{ fontSize: 12, fontFamily: "Inter_300Light" }}
      iconType="material-community"
      checkedIcon="checkbox-marked"
      uncheckedIcon="checkbox-blank-outline"
      checkedColor={COLORS.PRIMARY}
      center={false}
      title={title}
      checked={checked}
      onPress={onChange}
      {...props}
    />
  );
};

export default CheckboxDefault;
