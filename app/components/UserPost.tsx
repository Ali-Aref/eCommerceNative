import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Menu,
  Text,
  VStack,
} from "native-base";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { FlatList, Pressable } from "react-native";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";

const UserPost = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [like, setLike] = useState({
    count: 50,
    liked: false,
  });
  const handleLike = () => {
    setLike((l) => ({
      liked: !l.liked,
      count: l.liked ? --l.count : ++l.count,
    }));
  };

  return (
    <Box bg="white" shadow={7} rounded="md" mx={"3"} mt="4">
      <FlatList
        horizontal={true}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        renderItem={(item) => (
          <Pressable
            onPress={() =>
              navigation.navigate("ImageCloseUp", {
                src: require("../assets/temp/post.jpg"),
              })}
          >
            <Image
              source={require("../assets/temp/post.jpg")}
              // source={require("../assets/temp/post2.png")}
              h={280}
              w={388}
              alt="post-img"
              borderTopRadius={"md"}
            />
          </Pressable>
        )}
      />
      {/* start post sliders */}
      <Text
        position={"absolute"}
        top={1}
        right={2}
        fontSize="xs"
        color={"gray.800"}
      >
        1/3
      </Text>
      <HStack
        space={0.5}
        position="absolute"
        px="2"
        top={280 - 12}
        w="full"
        justifyContent={"center"}
      >
        <Box h="2" w="2" bg="primary.600" borderRadius={"full"} />
        <Box h="2" w="2" bg="gray.400" borderRadius={"full"} />
      </HStack>
      {/* end post sliders */}
      <Box p={4}>
        <Flex justifyContent={"space-between"} flexDirection="row">
          <Box
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            flexDirection={"row"}
            alignItems="center"
            borderRadius={"full"}
          >
            <Avatar
              size={"sm"}
              source={require("../assets/temp/profile2.jpg")}
              shadow="4"
            />
            <VStack>
              <Text mx="2" color={"black"} fontSize={"sm"} fontWeight="bold">
                Mohammad Ali Sultani
              </Text>
              <Text mx="2" color={"gray.500"} fontSize={"xs"}>
                3 days ago
              </Text>
            </VStack>
          </Box>
          <Menu
            placement="left bottom"
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                >
                  <Icon
                    color={"black"}
                    size={"md"}
                    as={<Feather name="more-horizontal" />}
                  />
                </Pressable>
              );
            }}
          >
            <Menu.Item isDisabled>Edit</Menu.Item>
            <Menu.Item>Share</Menu.Item>
            <Menu.Item>Report</Menu.Item>
          </Menu>
        </Flex>
        <Flex
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          mt={2}
        >
          <Pressable
            onPress={() => navigation.navigate("UserPostDetails")}
            style={{ flex: 0.70}}
          >
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="gray.700"
              noOfLines={2}
            >
              Post Title
              <Box w={2}></Box>
              <Text fontWeight="semibold" color="gray.500" fontSize={"md"}>
                250 AF
              </Text>
            </Text>
          </Pressable>
          <HStack space={3} flex={0.3} justifyContent={"flex-end"}>
            <HStack>
              <Pressable onPress={handleLike}>
                <Icon
                  as={AntDesign}
                  name="heart"
                  size={5}
                  color={like.liked ? "red.600" : "gray.300"}
                />
              </Pressable>
              <Text ml={1} fontSize="sm" color="gray.500">
                {like.count}
              </Text>
            </HStack>
            <HStack space={1}>
              <Icon
                as={FontAwesome}
                name="comment"
                size={5}
                color={"gray.300"}
              />
              <Text fontSize="sm" color="gray.500">
                301
              </Text>
            </HStack>
          </HStack>
        </Flex>
        <Pressable onPress={() => navigation.navigate("UserPostDetails")}>
          <Text fontSize="md" mt={2} numberOfLines={2} textAlign="left">
            This is the post description. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default UserPost;
