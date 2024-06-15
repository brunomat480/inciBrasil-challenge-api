import { Router } from 'express'

import createUser from '../modules/accounts/useCases/createUser'
import listUsers from '../modules/accounts/useCases/listUsers'

const usersRouter = Router()

usersRouter.get('/users', listUsers)
usersRouter.post('/users', createUser)

export { usersRouter }
