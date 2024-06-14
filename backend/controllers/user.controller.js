import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // The below line specifies to retrive all the users except the current logged in user
        // Because there is no need to display the current loggedin user
        const filteredUsers = await User.find({ _id : {$ne : loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}