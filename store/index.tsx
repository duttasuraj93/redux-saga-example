import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../redux/slices/userSlice'
import createSagaMiddleware from '@redux-saga/core'
// import { watcherSaga } from '../redux/sagas/rootSaga'
import rootSaga from '../redux/sagas/rootSaga'
import logger from 'redux-logger'


const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, logger]

export const store = configureStore({
  reducer: {
    user: userSlice
  },
  middleware
})

sagaMiddleware.run(rootSaga)



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch