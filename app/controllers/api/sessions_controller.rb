class Api::SessionsController < ApplicationController

    # log_in
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            log_in(@user)
            render 'api/users/show'
        else
            render json: ['Incorrect email/password'], status: 401
        end

    end

    # log_out
    def destroy
        log_out
        render 'api/users/show'
    end
end
