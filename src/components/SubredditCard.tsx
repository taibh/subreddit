import {
  BookmarkBorderOutlined,
  ChatBubbleOutline,
  MoreHorizOutlined,
  ShareOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Box, Button, Divider, Modal, Stack, Typography } from "@mui/material";
import { common, grey, red } from "@mui/material/colors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Thread } from "models/reddit";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import kFormatter from "utils/k-formatter";

const style = {
  root: {
    bgcolor: common.white,
    mb: 2,
    borderRadius: 1,
    cursor: "pointer",
  },
  leftContent: {
    p: 1,
    alignItems: "center",
  },
  vote: {
    width: 20,
    color: grey[500],
    ":hover": { color: red[400], bgcolor: grey[200] },
  },
  numberOfVote: {
    my: "4px",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: "16px",
  },
  postedBy: { fontSize: 12, lineHeight: "16px", color: grey[500] },
  commentArea: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
  },
  title: {
    mt: 1,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "22px",
    wordWrap: "break-word" as "break-word",
  },
  content: {
    mt: 1,
    fontSize: 14,
    lineHeight: "21px",
    wordBreak: "break-word" as "break-word",
    overflow: "hidden",
  },
  btn: { textTransform: "none" as "none", color: grey[600] },
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  },
};

const SubredditCard: React.FC<{
  thread: Thread;
  isDetailCard?: boolean;
}> = ({ thread, isDetailCard }) => {
  dayjs.extend(relativeTime);
  const navigate = useNavigate();
  const contentEl = useRef(null);
  const [contentHasOverFlow, setcontentHasOverFlow] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);

  let timeStr;
  if (!!thread.createdAt) {
    timeStr = `- ${dayjs(thread.createdAt * 1000).fromNow()}`;
  }

  useEffect(() => {
    const current: any = contentEl?.current;
    setcontentHasOverFlow(current?.scrollHeight > current?.clientHeight);
  }, []);

  const onClick = () => {
    navigate(`/thread/${thread.id}`);
  };

  const onVote = (e: React.MouseEvent, type: "up" | "down") => {
    e.stopPropagation();
    handleOpen();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={style.root} onClick={onClick}>
        <Stack direction="row">
          <Stack
            direction="column"
            sx={{
              ...style.leftContent,
              bgcolor: isDetailCard ? undefined : grey[100],
            }}
          >
            <ThumbUpAltOutlined
              sx={style.vote}
              onClick={(e) => onVote(e, "up")}
            />
            <Typography sx={style.numberOfVote}>
              {!!thread.numberOfVote ? kFormatter(thread.numberOfVote) : "Vote"}
            </Typography>
            <ThumbDownAltOutlined
              sx={style.vote}
              onClick={(e) => onVote(e, "down")}
            />
          </Stack>
          <Box>
            <Box
              sx={{
                p: 1,
              }}
            >
              <Typography sx={style.postedBy}>
                {`Posted by: u/${thread.author} ${timeStr}`}
              </Typography>
              <Typography sx={style.title}>{thread.title}</Typography>
              <Typography
                ref={contentEl}
                component="div"
                sx={{
                  ...style.content,
                  maxHeight: isDetailCard ? undefined : 250,
                  WebkitMaskImage:
                    contentHasOverFlow && !isDetailCard
                      ? `linear-gradient(180deg, #000 60%, transparent)`
                      : undefined,
                }}
              >
                {thread.content?.split("\n").map((i, key) => (
                  <div key={key}>{i}</div>
                ))}
              </Typography>
            </Box>
            <Box sx={{ px: 1 }}>
              <Button
                startIcon={<ChatBubbleOutline />}
                variant="text"
                sx={style.btn}
              >
                {kFormatter(thread.numberOfComments)} Comments
              </Button>
              <Button
                startIcon={<ShareOutlined />}
                variant="text"
                sx={style.btn}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Share
              </Button>
              <Button
                startIcon={<BookmarkBorderOutlined />}
                variant="text"
                sx={style.btn}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Save
              </Button>
              <Button
                startIcon={<MoreHorizOutlined />}
                variant="text"
                sx={style.btn}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </Box>
          </Box>
        </Stack>
        {isDetailCard && (
          <>
            <Divider variant="middle" />
            <Stack sx={style.commentArea}>This is comments area</Stack>
          </>
        )}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Imformation!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Login is required to perform, but this feature is currently not
            supported!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default SubredditCard;
