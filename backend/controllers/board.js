export const getBoard = async (req, res) => {
    const board = {
        id: 1,
        name: "Test Board",
        description: "This is a test board",
        userId: 1
    }
    res.status(200).json(board);
}