import React, { useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { AntDesign, Feather } from "@expo/vector-icons";
import Comment from "./comment";

const UserPostDetails = () => {
  const { width } = useWindowDimensions();

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
          <Image
            source={require("../assets/temp/post.jpg")}
            h="250"
            w={width}
            alt="post-img"
            borderTopRadius={"md"}
          />
        )}
      />
      <Box px="4">
        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
          <HStack mt={2}>
            <Pressable onPress={handleLike}>
              <Icon
                as={AntDesign}
                name="heart"
                size={5}
                color={like.liked ? "red.600" : "gray.300"}
              />
            </Pressable>
            <Text ml={1} fontSize="sm" color="gray.500">
              {like.count} likes
            </Text>
          </HStack>
          <HStack space={0.5}>
            <Box h="2" w="2" bg="primary.600" borderRadius="full" />
            <Box h="2" w="2" bg="gray.400" borderRadius="full" />
          </HStack>
          <Text fontSize="sm" color="gray.500" mt={2}>
            3 comments
          </Text>
        </Flex>
        <Text fontSize="sm" color={"gray.500"} mt={2} textAlign="left">
          3 days ago
        </Text>
        <HStack space={2} alignItems="center" mt={4}>
          <Text fontSize="lg" fontWeight="bold">
            Post Title
          </Text>
          <Text fontWeight="semibold" color="gray.500">
            250 AF
          </Text>
        </HStack>
        <Text fontSize="md" mt={2} numberOfLines={2} textAlign="left">
          This is the post description. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
        <Text my="2" fontWeight={"semibold"} fontSize="lg" textAlign={"left"}>
          Comments
        </Text>
      </Box>
    </Box>
  );

  return (
    <Flex rounded="md" flex="1">
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
      />
      <HStack px="3" space={2} my="2">
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

export default UserPostDetails;
