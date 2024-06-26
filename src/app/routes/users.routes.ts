import { Router } from 'express'

import createUser from '../modules/accounts/useCases/createUser'
import listUsers from '../modules/accounts/useCases/listUsers'
import singleUser from '../modules/accounts/useCases/singleUser'

const usersRouter = Router()

usersRouter.get('/users', listUsers)
usersRouter.post('/users', createUser)
usersRouter.get('/users/:id', singleUser)

export { usersRouter }
