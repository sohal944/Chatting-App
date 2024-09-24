import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="flex-end" // Aligns children to the bottom of the box
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      h="100vh" // Ensure the height occupies full viewport
      overflowY="hidden" // Prevent overflowing
    >
      <Box 
        flex="1" // Allow this box to grow and take up available space
        w="100%" // Full width
        overflowY="auto" // Enable scrolling for messages
      >
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
    </Box>
  );
};

export default Chatbox;
