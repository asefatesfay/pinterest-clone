export const getPin = (req, res) => {
    const pin = {
        id: 1,
        name: "Test Pin"
    };
    res.status(200).json(pin);
}