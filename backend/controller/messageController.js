import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModule.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    if (!conversation) {
      conversation = await conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.message.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(200).json(newMessage);
  } catch (error) {}
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChartId } = req.params;
    const senderId = req.user;

    const conversation = await conversation
      .findOne({
        participants: { $all: [senderId, userToChartId] },
      })
      .populate("messages");
    if (!conversation) return res.status(200).json([]);

    const message = conversation.message;
    res.status(200).json(message);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};

export default sendMessage;
