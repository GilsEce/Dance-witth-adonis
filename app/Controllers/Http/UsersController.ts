import PostRequestValidator from 'App/Validators/PostRequestValidator';

export default class UsersController {
    public async getUsers(request){
        await request.validate(PostRequestValidator);
    }
}
