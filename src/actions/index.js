import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=uniqueKey12345'

export function fetchPosts(){
  const postsPromise = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: postsPromise
  }
}

export function fetchPost(id){
  const postPromise = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: postPromise
  }
}

export function createPost(values, callback){
  const createPostPromise = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                                  .then(() => callback());
  return {
    type: CREATE_POST,
    payload: createPostPromise
  }
}
