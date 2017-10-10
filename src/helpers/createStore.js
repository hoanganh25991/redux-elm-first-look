import {createStore, applyMiddleware, compose} from 'redux';
import {install} from '@jarvisaoieong/redux-loop';
import createLogger from '@jarvisaoieong/redux-logger';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

export default (reducer, initialState) =>
  createStore(reducer, initialState, compose(
    install(),
    composeWithDevTools(applyMiddleware(createLogger({collapsed: true}))),
  ))
