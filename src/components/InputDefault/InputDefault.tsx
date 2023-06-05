import { Input, InputProps } from "@rneui/themed";
import { COLORS } from "../../constants/Colors";
import React from "react";

const InputDefault: React.FC<InputProps> = (props: InputProps) => (
  <Input
    containerStyle={{
      borderBottomColor: COLORS.GRAY,
      padding: 0,
      margin: 0,
    }}
    style={{
      fontFamily: "Inter_300Light",
      fontSize: 14,
      padding: 0,
      margin: 0,
    }}
    errorStyle={{position: 'absolute', bottom: -12, left: 10}}
    //errorMessage="aeaore"
    cursorColor={COLORS.GRAY}
    inputContainerStyle={{
      padding: 0,
      margin: 0,
      marginVertical: 8,
      borderBottomWidth: 1,
      borderColor: COLORS.GRAY,
    }}
    {...props}
  />
);

export default InputDefault;
