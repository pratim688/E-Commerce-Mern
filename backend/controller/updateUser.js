import User from "../models/userModel.js";

const updateUser = async (req, res) => {
  try {
    const sessionUser = req.user.id; // Assumes `req.user` is populated via middleware
    const { userId, email, name, role } = req.body;

    // Ensure `userId` is provided
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
        error: true,
      });
    }

    // Validate session user exists
    const sessionUserDoc = await User.findById(sessionUser);
    if (!sessionUserDoc) {
      return res.status(403).json({
        message: "Unauthorized: Invalid session user",
        success: false,
        error: true,
      });
    }

    // Check permissions (e.g., only admin or self can update)
    // if (sessionUserDoc.role !== "admin" && sessionUser !== userId) {
    //   return res.status(403).json({
    //     message: "Unauthorized: You do not have permission to update this user",
    //     success: false,
    //     error: true,
    //   });
    // }

    // Create the update payload dynamically
    const payload = {
      ...(email && { email }),
      ...(name && { name }),
      ...(role && { role }),
    };

    // Check if `userId` exists in the database
    const userToUpdate = await User.findById(userId);
    if (!userToUpdate) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }

    // Perform the update
    const updatedUser = await User.findByIdAndUpdate(userId, payload, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });

    res.json({
      data: updatedUser,
      message: "User updated successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({
      message: "Internal server error",
      error: true,
      success: false,
    });
  }
};

export default updateUser;
