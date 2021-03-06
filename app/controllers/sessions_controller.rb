class SessionsController < ApplicationController
    # skip_before_action :confirm_authentication, only: [:create]
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def logout
      user = User.find_by(id: session[:user_id])
      if user
        session[:user_id] = nil
        render json: {message: "Logged out successfully"}, status: :ok
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def set_favorite
        session[:favorites] ||= []
        session[:favorites] << Product.find_by(id: params[:id])
    end
    
    def clear_favorites
        session[:favorites] = []
    end
end