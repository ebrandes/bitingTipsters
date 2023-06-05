import { Input, InputProps } from "@rneui/themed";
import { COLORS } from "../../constants/Colors";
import React from "react";

const InputDefault: React.FC<InputProps> = (props: InputProps) => {
  return (
    <Input
      inputStyle={{}}
      containerStyle={{
        borderBottomColor: COLORS.GRAY,
        padding: 0,
        margin: 0,
        marginHorizontal: 0,
        paddingHorizontal: 0,
      }}
      style={{
        fontFamily: "Inter_300Light",
        fontSize: 14,
      }}
      errorStyle={{ position: "absolute", bottom: -15, right: 5 }}
      cursorColor={COLORS.GRAY}
      inputContainerStyle={{
        padding: 0,
        margin: 0,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderColor: !props.errorMessage ? COLORS.GRAY : COLORS.ERROR,
      }}
      {...props}
    />
  );
};

export default InputDefault;
