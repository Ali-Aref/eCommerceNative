import React from "react";
import { Image, View } from "react-native";
import { Avatar, Box, HStack, Text, VStack } from "native-base";

interface CommentProps {
  avatarSource: any;
  timestamp: string;
  commenterName: string;
  commentText: string;
}

const Comment: React.FC<CommentProps> = ({
  avatarSource,
  timestamp,
  commenterName,
  commentText,
}) => {
  return (
    <Box p={2} borderBottomWidth={1} borderBottomColor="gray.200">
      <HStack space={2} alignItems="flex-start">
        <Avatar source={avatarSource} size="sm" />
        <VStack flex="1">
          <HStack justifyContent="space-between">
            <Text fontSize="sm" fontWeight="bold">
              {commenterName}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {timestamp}
            </Text>
          </HStack>
          <Text>{commentText}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Comment;
