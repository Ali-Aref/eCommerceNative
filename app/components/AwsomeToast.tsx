import { AntDesign } from "@expo/vector-icons";
import { Alert, HStack, Icon, IconButton, Text, VStack } from "native-base";

type AwsomeToast = {
  id: any;
  toast: any;
  status?: "info" | "error" | "success" | "warning";
  variant?:
    | "subtle"
    | "solid"
    | "outline"
    | "left-accent"
    | "top-accent"
    | "outline-light";
  title: string | null;
  description?: string | null;
  isClosable?: boolean;
  rest?: any;
};

const AwsomeToast = ({
  id,
  toast,
  status = "info",
  variant = "solid",
  title,
  description,
  isClosable = true,
  rest = {},
}: AwsomeToast) => {
  return (
    <Alert
      maxWidth="90%"
      alignSelf="center"
      flexDirection="row"
      status={status ? status : "info"}
      variant={variant}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={variant === "solid"
                ? "lightText"
                : variant !== "outline"
                ? "darkText"
                : null}
            >
              {title}
            </Text>
          </HStack>
          {isClosable
            ? (
              <IconButton
                variant="unstyled"
                icon={<Icon as={<AntDesign name="close" />} />}
                _icon={{
                  color: variant === "solid" ? "lightText" : "darkText",
                }}
                onPress={() => {
                  console.log("closing toast: ", id);
                  toast?.close(id);
                }}
              />
            )
            : null}
        </HStack>
        <Text
          px="6"
          color={variant === "solid"
            ? "lightText"
            : variant !== "outline"
            ? "darkText"
            : null}
        >
          {description}
        </Text>
      </VStack>
    </Alert>
  );
};

export default AwsomeToast;
