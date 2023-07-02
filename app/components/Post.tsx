import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  Modal,
  Text,
  VStack,
} from "native-base";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { FlatList, Pressable } from "react-native";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";

const Post = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
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
              navigation.navigate("PostMedias", {
                src: require("../assets/temp/post.jpg"),
              })
            }
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
        <Box h="2" w="2" bg="gray.400" borderRadius={"full"} />
      </HStack>
      {/* end post sliders */}
      <Box p={4}>
        <HStack justifyContent={"space-between"} alignItems="center">
          <Box flexDirection={"row"} alignItems="center">
            <Avatar
              size={"sm"}
              source={require("../assets/temp/profile2.jpg")}
              shadow="4"
            />
            <VStack alignItems={"flex-start"}>
              <Text mx="2" fontSize={"md"} fontWeight="bold">
                Mohammad Ali Sultani
              </Text>
              <Text mx="2" color={"gray.500"} fontSize={"xs"}>
                3 days ago
              </Text>
            </VStack>
          </Box>
          <Modal isOpen={showMoreMenu} onClose={() => setShowMoreMenu(false)}>
            <Modal.Content maxWidth={400}>
              <Modal.Body>
                <Button variant={"ghost"} justifyContent="flex-start">
                  Edit
                </Button>
                <Button variant={"ghost"} justifyContent="flex-start">
                  Updated
                </Button>
                <Button variant={"ghost"} justifyContent="flex-start">
                  Share
                </Button>
                <Button variant={"ghost"} justifyContent="flex-start">
                  Report
                </Button>
              </Modal.Body>
            </Modal.Content>
          </Modal>

          <IconButton
            onPress={() => setShowMoreMenu(true)}
            icon={<Icon icon={<Feather name="more-horizontal" />} />}
          />
        </HStack>
        <Flex
          flexDirection={"row"}
          justifyContent="space-between"
          // alignItems={"center"}
          mt={2}
        >
          <HStack space={1}>
            <Text fontWeight="semibold" color="gray.500" fontSize={"md"}>
              5000
            </Text>
            <Text fontWeight="semibold" color="gray.500" fontSize={"md"}>
              ؋
            </Text>
          </HStack>
          <HStack space={3} position="absolute" right="0">
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
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="gray.700"
          noOfLines={2}
          textAlign="left"
        >
          Lorem ipsum dolor sit amet
        </Text>
        <Pressable onPress={() => navigation.navigate("PostDetails")}>
          <Text fontSize="md" mt={2} numberOfLines={2} textAlign="left">
            This is the post description. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Post;

// installed this
// npx expo install react-native-web@~0.18.10 @expo/webpack-config@^18.0.1
