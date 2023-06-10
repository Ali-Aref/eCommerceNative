import { Box, Text, Image, HStack, Icon, Flex } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { FlatList, Pressable } from "react-native";
import { useState } from "react";

const UserPost = () => {
	const [like, setLike] = useState({
		count: 5,
		liked: false,
	});
	const handleLike = () => {
		setLike(l=>({
			liked: !l.liked,
			count: l.liked ? --l.count : ++l.count
		}))
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
					<Image
						source={require("../assets/temp/post.jpg")}
						h="250"
						w={"388"}
						alt="post-img"
						borderTopRadius={"md"}
					/>
				)}
			/>
			<Box p={4}>
				<Flex
					flexDir={"row"}
					alignItems="center"
					justifyContent="space-between"
				>
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
						<Box h="2" w="2" bg="primary.600" borderRadius={"full"} />
						<Box h="2" w="2" bg="gray.400" borderRadius={"full"} />
					</HStack>
					<Text fontSize="sm" color="gray.500" mt={2}>
						3 comments
					</Text>
				</Flex>
				<Text fontSize="sm" color="gray.500" mt={2}>
					3 days ago
				</Text>
				<HStack space={2} alignItems={"center"} mt={4}>
					<Text fontSize="lg" fontWeight="bold">
						Post Title
					</Text>
					<Text fontWeight="semibold" color="gray.500">
						250 AF
					</Text>
				</HStack>
				<Text fontSize="md" mt={2} numberOfLines={2}>
					This is the post description. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.
				</Text>
			</Box>
		</Box>
	);
};

export default UserPost;