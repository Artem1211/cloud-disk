const Router = require("express");
const { check } = require("express-validator")
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')

const authController = require('../controllers/authController')

router.post('/registration',
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 })
    ],
    authController.registration)

router.post('/login', authController.login)
router.get('/auth', authMiddleware, authController.auth)

module.exports = router