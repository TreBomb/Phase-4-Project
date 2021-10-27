class UsersController < ApplicationController
    # def show
    #     @user = User.find(params[:id])
    #     if @user
    #         render json: @user
    #     else
    #         render json: {error: "User not found"}, status: 404
    #     end
    # end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :400
        end
    end
    
    private

    def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
