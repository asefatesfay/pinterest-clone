export const getUser = (req, res) => {
    const user = {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com"
    };

    res.status(200).json(user);
}
