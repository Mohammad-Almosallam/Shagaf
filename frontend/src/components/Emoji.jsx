import { Heading, ScaleFade, Box } from "@chakra-ui/react";
import React, { useState } from "react";

function Emoji() {
  const [emoji, setEmoji] = useState("🤩");
  const [isOpen, setOpen] = useState(true);

  var emojis = [
    "😄",
    "😀",
    "😊",
    "😉",
    "😍",
    "😘",
    "😚",
    "😗",
    "😙",
    "😜",
    "😝",
    "😛",
    "😳",
    "😁",
    "😔",
    "😌",
    "😒",
    "😞",
    "😣",
    "😢",
    "😂",
    "😭",
    "😪",
    "😥",
    "😰",
    "😅",
    "😓",
    "😩",
    "😫",
    "😨",
    "😱",
    "😠",
    "😡",
    "😤",
    "😖",
    "😆",
    "😋",
    "😷",
    "😎",
    "😴",
    "😵",
    "😲",
    "😟",
    "😦",
    "😧",
    "😈",
    "👿",
    "😮",
    "😬",
    "😐",
    "😕",
    "😯",
    "😶",
    "😇",
    "😏",
    "😑",
  ];

  function loadNewEmoji() {
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }
  return (
    <ScaleFade initialScale={0.9} in={isOpen}>
      <Box
        fontSize={"5xl"}
        onMouseOver={() => {
          setOpen(false);
        }}
        onMouseOut={() => {
          loadNewEmoji();
          setOpen(true);
        }}
        onClick={() => {
          loadNewEmoji();
        }}
      >
        {emoji}
      </Box>
    </ScaleFade>
  );
}

export default Emoji;
