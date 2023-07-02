import React, { useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";
import {
    Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import Comment from "../components/comment";
import { NavigationProp } from "@react-navigation/native";

const PostDetails = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const { width } = useWindowDimensions();
  
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [like, setLike] = useState({ liked: false, count: 0 });

  const handleLike = () => {
    setLike((prevState) => ({
      ...prevState,
      liked: !prevState.liked,
      count: prevState.liked ? prevState.count - 1 : prevState.count + 1,
    }));
  };

  const Header = (
    <Box flex="1">
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
              h="250"
              w={width}
              alt="post-img"
            />
          </Pressable>
        )}
      />
      <Box px="4" mt="2">
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
      <Text mt={4} fontSize="lg" fontWeight={"bold"}>Comments</Text>
      </Box>
    </Box>
  );

  return (
    <Flex rounded="md" flex="1" justifyContent={"space-between"}>
      <FlatList
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        ListHeaderComponent={Header}
        renderItem={(item) => (
          <Comment
            avatarSource={require("../assets/temp/profile.png")}
            timestamp={"2023-03-01"}
            commenterName={"Ali"}
            commentText={"Nice post"}
          />
        )}
        // ListFooterComponent={}
      />
      <HStack px="3" space={2} my="2" mb={20}>
        <Input flex="1" placeholder="Add new comment" textAlign={"left"} />
        <IconButton
          variant={"solid"}
          px="3"
          icon={<Feather color="white" size={20} name="send" />}
        />
      </HStack>
    </Flex>
  );
};

export default PostDetails;
