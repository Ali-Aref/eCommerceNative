import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  Link,
  Pressable,
  Text,
  useToast,
} from "native-base";
import { useState } from "react";
import i18n from "../i18/i18n";
import { Feather } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../store/useAuth";
import { useMutation } from "react-query";
import { axiosRequest } from "../Api";
import { EmailRegex } from "../help/regex";
import { FieldErrorMessage } from "../components/extra/FieldErrorMessage";
import AwsomeToast from "../components/AwsomeToast";

const Login = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [showpassword, setshowpassword] = useState(false);
  const toast = useToast();

  const { setAuth } = useAuth();

  const { control, handleSubmit } = useForm({
    shouldUnregister: false,
  });

  const { mutate } = useMutation(
    (data) => axiosRequest.post(`/api/login`, data),
    {
      onSuccess: (res: any) => {
        console.log("res: ", res.data);
        setAuth({
          authenticated: true,
          token: res.data.token,
          userId: res.data.user.id,
          name: res.data.user.name,
          role: res.data.user.role,
          email: res.data.user.email,
          status: res.data.user.status,
          emailVerifiedAt: res.data.user.email_verified_at,
          createdAt: res.data.user.created_at,
          updatedAt: res.data.user.updated_at,
        });
        navigation.navigate(
          res.data.user.email_verified_at ? "HomeTabs" : "VerificationCode",
        );
      },
      onError: (err: any) =>
        toast.show({
          render: ({ id }) => (
            <AwsomeToast
              id={id}
              status="error"
              variant="left-accent"
              toast={toast}
              title="Ops! Sorry"
              description={err?.response.data?.message
                ? err?.response.data.message
                : err?.response.data.errors}
            />
          ),
        }),
    },
  );
  const onSubmit = (data: any) => mutate(data);

  return (
    <Flex justifyContent={"space-evenly"} alignItems="center" flex={1}>
      <Box padding={10} w="full">
        <FormControl>
          <Text fontSize={"lg"}>{i18n.t("Email")}</Text>
          <Controller
            control={control}
            name="email"
            defaultValue={""}
            render={({ field, formState }: any) => (
              <>
                <Input
                  {...field}
                  onChangeText={field.onChange}
                  mt="2"
                  fontSize={"lg"}
                  w="full"
                />
                <FieldErrorMessage field={field} formState={formState} />
              </>
            )}
            rules={{
              required: "The email field is required.",
              pattern: {
                value: EmailRegex.value,
                message: EmailRegex.message,
              },
            }}
          />
          <Text fontSize={"lg"} mt="2">
            {i18n.t("Password")}
          </Text>
          <Controller
            control={control}
            name="password"
            defaultValue={""}
            render={({ field, formState }) => (
              <>
                <Input
                  {...field}
                  onChangeText={field.onChange}
                  mt="2"
                  w="full"
                  fontSize={"lg"}
                  type={showpassword ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setshowpassword(!showpassword)}>
                      <Icon
                        size={"lg"}
                        right="2"
                        as={<Feather name={showpassword ? "eye-off" : "eye"} />}
                      />
                    </Pressable>
                  }
                />
                <FieldErrorMessage field={field} formState={formState} />
              </>
            )}
            rules={{
              required: "The password field is required.",
              minLength: {
                value: 5,
                message: "The password should be at least 5 characters.",
              },
            }}
          />
          <Button
            mt="4"
            w="full"
            size={"lg"}
            // onPress={() => navigation.navigate("HomeTabs")}
            onPress={handleSubmit(onSubmit)}
          >
            {i18n.t("Login")}
          </Button>
        </FormControl>

        <Link
          mt="1"
          _text={{
            color: "primary.600",
          }}
          isUnderlined={false}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          {i18n.t("Forgot Password?")}
        </Link>
      </Box>
      <Box px={10} w="full" alignItems="center">
        <Button
          size={"lg"}
          variant="ghost"
          w="full"
          onPress={() => navigation.navigate("SignUp")}
        >
          {i18n.t("Create New Account")}
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
