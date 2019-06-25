class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            render :show
        else
            render json: @event.errors.full_messages, status:422
        end
    end

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
    
end
