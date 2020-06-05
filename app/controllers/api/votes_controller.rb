class Api::VotesController < ApplicationController
    before_action :logged_in?, only: [:create]

    def index 
        @votes = Vote.all
        render 'api/votes/index'
    end

    def show
       @vote = Vote.find(params[:id])
       if @vote
            render 'api/votes/show'
       else
            render json: @answer.errors.full_messages, status: 402
       end
    end

    def create
        @vote = Vote.new(vote_params)
        @vote.user_id = current_user.id 
        if @vote.save
            render 'api/votes/show'
        else
            render json: @vote.errors.full_messages, status: 422
        end
    end

    def destroy
        @vote = Vote.find(params[:id])
        if @vote
            @vote.destroy
        else
            render json: ["Can't find vote"]
        end
    end

    private
    def vote_params
        params.require(:vote).permit(:vote_type, :post_type, :post_id, :answer_id)
    end
end
