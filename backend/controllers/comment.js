export const getComment = async (req, res) => {
    const comment = {
        id: 1,
        text: "This is a comment",
        userId: 1,
        pinId: 1
    }
    res.status(200).json(comment);
}