import React, { useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { Box, Text, HStack, Pressable, Icon, Flex, Input, Button, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const UserPostDetails = () => {
  const [like, setLike] = useState({ liked: false, count: 0 });
  const [comments, setComments] = useState([
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLike((prevState) => ({
      ...prevState,
      liked: !prevState.liked,
      count: prevState.liked ? prevState.count - 1 : prevState.count + 1,
    }));
  };

  const handleAddComment = () => {
    if (newComment) {
      const comment = { id: comments.length + 1, text: newComment };
      setComments((prevComments) => [...prevComments, comment]);
      setNewComment('');
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Box p={2} borderBottomWidth={1} borderBottomColor="gray.200">
        <Text>{item.text}</Text>
      </Box>
    );
  };

  return (
    <Box bg="white" shadow={7} rounded="md" mx={3} mt={4}>
      <FlatList
        horizontal
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        renderItem={({ item }) => (
          <Image
            source={require('../assets/temp/post.jpg')}
            style={{ height: 250, width: 388 }}
            alt="post-img"
            borderTopRadius="md"
          />
        )}
      />
      <Box p={4}>
        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
          <HStack mt={2}>
            <Pressable onPress={handleLike}>
              <Icon
                as={AntDesign}
                name="heart"
                size={5}
                color={like.liked ? 'red.600' : 'gray.300'}
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
            {comments.length} comments
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500" mt={2}>
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
        <Text fontSize="md" mt={2} numberOfLines={2}>
          This is the post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <VStack mt={4} space={2}>
          <Text fontSize="lg" fontWeight="bold">
            Comments
          </Text>
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ flexGrow: 1 }}
          />
          <Input
            placeholder="Add a comment"
            value={newComment}
            onChangeText={setNewComment}
          />
          <Button onPress={handleAddComment}>Add Comment</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default UserPostDetails;
