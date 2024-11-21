import express from 'express'
import {userSignup} from '../controller/userSignup.js'
import userSignInController from '../controller/userSignin.js'
import userDetailsController from '../controller/userDetails.js'
import authToken from '../middleware/authToken.js'
const router = express.Router()

router.post('/signup', userSignup);
router.post('/signin', userSignInController);
router.get('/user-details',authToken,userDetailsController)
export default router