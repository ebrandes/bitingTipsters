import { useMaskedInputProps } from "react-native-mask-input";

export const phoneMaskInput = (phone, setPhone) =>
  useMaskedInputProps({
    value: phone,
    onChangeText: setPhone,
    mask: [
      "(",
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
    maskAutoComplete: true,
    placeholderFillCharacter: "*",
  });
