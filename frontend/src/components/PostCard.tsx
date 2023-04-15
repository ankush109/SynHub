// import React, { FC } from "react";

// const PostCard: FC<any> = ({ logo }) => {
//   return (
//     <div className="flex my-5 bg-zinc-700 rounded-xl h-1/2 flex-col mx-20">
//       <div className="flex items-center">
//         <img
//           className=" my-10 mx-5 w-10 h-10 rounded-xl"
//           src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/323871600_892778521853988_6150767426817074706_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=W1snVqUjgBIAX85f965&_nc_ht=scontent.fccu3-1.fna&oh=00_AfAw4kZ7hbXVWyboFm5ZEzesyyOGUyOCI6TbEFWsSWY8oA&oe=643C467B"
//         />
//         <div className="flex flex-col items-center">
//           <div>
//             <p>Souvik Sen </p>
//             <h2>Kolkata , West Bengal</h2>
//           </div>
//         </div>
//         <div className="mx-4">
//           <p className="text-yellow-400">1 hr ago</p>
//         </div>
//       </div>
//       <div className="flex flex-col items-center">
//         <div className=" mx-4">
//           <h2>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit
//             rem voluptas laboriosam officia natus nemo, qui eveniet, excepturi
//             accusantium illum? Cupiditate amet vel eaque doloribus natus maiores
//             accusamus similique.
//           </h2>
//         </div>
//         <div className="w-3/5 m-4">
//           <img className="h-96 w-full" src={logo} alt="logo" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCard;

import React, { useState } from "react";
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { NextRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import Link from "next/link";

const PostItem: React.FC<any> = ({}) => {
  const handleDelete = async () => {};
  const handleClick = () => {};

  return (
    <Flex
      border="1px solid"
      backgroundColor={"gray.50"}
      borderColor={"gray.300"}
      borderRadius={4}
      cursor={"pointer"}
      _hover={{ borderColor: "gray.500" }}
      onClick={handleClick}
      mx={50}
      my={7}
    >
      <Flex
        direction="column"
        align="center"
        bg={"gray.100"}
        p={2}
        width="40px"
        borderRadius={"3px 0px 0px 3px"}
      >
        <Icon
          as={IoArrowUpCircleOutline}
          color={"gray.400"}
          fontSize={25}
          cursor="pointer"
          onClick={handleClick}
        />
        <Text fontSize="11pt" fontWeight={600}>
          20
        </Text>
        <Icon
          as={IoArrowDownCircleOutline}
          color={"gray.400"}
          fontSize={25}
          cursor="pointer"
          onClick={handleClick}
        />
      </Flex>
      <Flex direction="column" width="100%">
        <Stack spacing={1} p="10px 10px">
          <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
            <>
              {/* <Image
                borderRadius="full"
                boxSize="18px"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/323871600_892778521853988_6150767426817074706_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=W1snVqUjgBIAX85f965&_nc_ht=scontent.fccu3-1.fna&oh=00_AfAw4kZ7hbXVWyboFm5ZEzesyyOGUyOCI6TbEFWsSWY8oA&oe=643C467B"
                mr={2}
              /> */}

              {/* <Link href={`#`}>
                <Text
                  fontWeight={700}
                  _hover={{ textDecoration: "underline" }}
                  onClick={handleClick}
                >
                  #
                </Text>
              </Link> */}
              {/* <Icon as={BsDot} color="gray.500" fontSize={8} /> */}
            </>
            <div className="flex flex-col">
              <Link href={`#`}>
                <Text
                  color="gray.500"
                  fontWeight="bold"
                  fontSize="11pt"
                  _hover={{ textDecoration: "underline" }}
                  onClick={handleClick}
                >
                  Cp Room
                </Text>
              </Link>

              <div className="flex items-center">
                <div className="flex flex-row items-center space-between-1">
                  {/* <h2>Cp Room </h2> */}
                  {/* <Text color="gray.500" fontWeight="bold">
                    Cp Room
                  </Text> */}
                  <Image
                    borderRadius="full"
                    boxSize="18px"
                    src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/323871600_892778521853988_6150767426817074706_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=W1snVqUjgBIAX85f965&_nc_ht=scontent.fccu3-1.fna&oh=00_AfAw4kZ7hbXVWyboFm5ZEzesyyOGUyOCI6TbEFWsSWY8oA&oe=643C467B"
                    mr={2}
                  />
                  <div>
                    <Text color="gray.500" fontWeight={"bold"}>
                      Posted by
                    </Text>
                  </div>
                  <div>
                    <Link href={`#`}>
                      <Text
                        color="gray.500"
                        fontWeight="bold"
                        _hover={{ textDecoration: "underline" }}
                        onClick={handleClick}
                      >
                        Ron007
                      </Text>
                    </Link>
                  </div>
                  {/* <p>Ron007</p> */}
                </div>
                <div className="mx-4">
                  <p className="text-yellow-400">1 hr ago</p>
                </div>
              </div>
            </div>
          </Stack>

          <Text fontSize="12pt" fontWeight={600}>
            Post title
          </Text>
          <Text fontSize="10pt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit
            rem voluptas laboriosam officia natus nemo, qui eveniet, excepturi
            accusantium illum? Cupiditate amet vel eaque doloribus natus maiore
            accusamus similique.
          </Text>

          <Flex justify="center" align="center" p={2}>
            <Skeleton height="200px" width="100%" borderRadius={4} />

            <Image
              // width="80%"
              // maxWidth="500px"
              maxHeight="460px"
              src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
              alt="Post Image"
            />
          </Flex>
        </Stack>
        <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600}>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">42</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoArrowRedoOutline} mr={2} />
            <Text fontSize="9pt">Share</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex>

          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            onClick={handleDelete}
          >
            {/* <Spinner size="sm" /> */}
            <>
              <Icon as={AiOutlineDelete} mr={2} />
              <Text fontSize="9pt">Delete</Text>
            </>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostItem;
