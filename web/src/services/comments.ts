import api from './api';

export async function postComment(comment: string){
    const response = api.post('comments', {text: comment});

    return response;
}

export async function getAllComments(){
    const response = api.get('comments');

    return response;
}