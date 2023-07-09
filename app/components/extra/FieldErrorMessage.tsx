import { Text } from "native-base";
import React from "react";

export const FieldErrorMessage = ({
  field,
  formState,
}: {
  field: any;
  formState: any;
}) => {
  return (
    formState.errors?.[field.name] && (
      <Text color={"error.500"}>{formState.errors?.[field.name]?.message}</Text>
    )
  );
};
