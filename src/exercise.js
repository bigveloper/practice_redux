/**
 * @description redux
 */
import { createStore } from 'redux';

const initState = {
    counter: 0,
    text: '',
    list: [],
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';
