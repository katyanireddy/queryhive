const prisma = require("../config/prisma");

const getMessages = async (req, res) => {
  try {
    const messages = await prisma.message.findMany();

    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};
const createMessage = async (req, res) => {
  try {
    const { text } = req.body;

    const newMessage = await prisma.message.create({
      data: {
        text,
      },
    });

    res.json(newMessage);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

module.exports = {
  getMessages,
  createMessage,
};