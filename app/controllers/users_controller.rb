class UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        if @user
            render json: @user
        else
            render json: {error: "User not found"}, status: 404
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: {error: "User not created"}, status: 400
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
