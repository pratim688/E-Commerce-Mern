import express from 'express'
import {userSignup} from '../controller/userSignup.js'
import userSignInController from '../controller/userSignin.js'
import userDetailsController from '../controller/userDetails.js'
import authToken from '../middleware/authToken.js'
import userLogout from '../controller/userLogout.js'
import allUsers from '../controller/allUsers.js'
import updateUser from '../controller/updateUser.js'
const router = express.Router()

router.post('/signup', userSignup);
router.post('/signin', userSignInController);
router.get('/user-details',authToken,userDetailsController)
router.get('/logout',userLogout)


//admin panal
router.get('/all-users',authToken,allUsers)
router.post('/update-user',authToken,updateUser)





export default router