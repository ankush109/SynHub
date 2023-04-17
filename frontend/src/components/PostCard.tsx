import React, { useEffect, useState } from "react";
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
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
import Editpost from "@/pages/edit-user";
import EditPost from "./Editpost";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  createComment,
  disklikePost,
  getComments,
  getCommentsQuery,
  likePost,
} from "@/api/posts";
import { toast } from "react-hot-toast";
import CommentCard from "./commentCard";
import { GetPostQuery } from "@/api/user";
import { FiSend } from "react-icons/fi";
const PostItem: React.FC<any> = ({
  id,
  title,
  data,
  user,
  description,
  displayImages,
  createdAt,
}) => {
  let images: any = [];

  const [comments, setComments] = useState<any>(false);
  const GetPostQuerys = GetPostQuery();
  displayImages?.map((image: any) => {
    images.push({
      original: image,
      thumbnail: image,
    });
  });
  const handleDelete = async () => {
    console.log(title);
  };
  var moment = require("moment");
  const handleDownvote = async () => {
    const data = await disklikePost(id);
    toast.success(data?.data.message);
    GetPostQuerys.refetch();
  };
  const handleupvote = async () => {
    const data = await likePost(id);
    console.log(data);
    toast.success(data?.data.message);
    GetPostQuerys.refetch();
  };
  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<any>({
    mode: "onChange",

    defaultValues: {
      description: "",
    },
  });

  const onSubmit = async (val: any) => {
    try {
      await createComment(id, val.description);
      toast.success("Comment Added");
      reset();
      setValue("description", "");

      GetPostQuerys.refetch();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Flex
        border="1px solid"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        borderColor={"gray.300"}
        borderRadius={4}
        cursor={"pointer"}
        _hover={{ borderColor: "gray.500" }}
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
            onClick={handleupvote}
          />
          <Text fontSize="11pt" fontWeight={600}>
            {data.upvotes - data.downvotes}
          </Text>
          <Icon
            as={IoArrowDownCircleOutline}
            color={"gray.400"}
            fontSize={25}
            cursor="pointer"
            onClick={handleDownvote}
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
                          className="ml-1"
                          color="gray.500"
                          fontWeight="bold"
                          _hover={{ textDecoration: "underline" }}
                        >
                          {user?.name}
                        </Text>
                      </Link>
                    </div>
                    {/* <p>Ron007</p> */}
                  </div>
                  <div className="mx-4">
                    <p className="text-yellow-400">
                      {moment(createdAt).fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            </Stack>
            <EditPost
              data={description}
              id={id}
              title={title}
              picture={displayImages}
            />
            <Text fontSize="12pt" fontWeight={600}></Text>
            <Text fontSize="10pt">{description}</Text>

            <div className="flex h-full flex-col gap-2">
              <Skeleton width="100%" borderRadius={4} />
              <div className="">
                <ImageGallery
                  disableSwipe={true}
                  showPlayButton={false}
                  items={images}
                />
              </div>
            </div>
          </Stack>
          <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600}>
            <div
              onClick={() => {
                setComments(!comments);
              }}
            >
              <Flex
                align="center"
                p="8px 10px"
                borderRadius={4}
                _hover={{ bg: "gray.200" }}
                cursor="pointer"
              >
                <Icon as={BsChat} mr={2} />
                <Text fontSize="9pt">{
                  data.comments.length
                }</Text>
              </Flex>
            </div>
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
      {comments ? (
        <div className=" mx-20 w-5/6 h-96 overflow-none overflow-y-auto bg-zinc-700 border border-white">
          <div className="mx-20 my-4">
            <p>Commenting to {user?.name} </p>
            <div className="flex flex-col">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex p-4 rounded-lg  bg-zinc-400">
                    <TextField
                      className=" bg-zinc-400 rounded-lg text-black w-full"
                      {...register("description")}
                      placeholder="Add a comment"
                    />

                    <button
                      type="submit"
                      onClick={() => {
                        handleSubmit(onSubmit);
                      }}
                      // disabled={isSubmitting || isValidating}
                      className="my-2 mx-1 "
                    >
                      <FiSend color="black" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="">
                {data.comments?.map((comment: any) => (
                  <div className="my-3">
                    <CommentCard comment={comment} user={data.user} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostItem;
