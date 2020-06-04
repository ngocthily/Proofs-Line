class Api::VotesController < ApplicationController
    def create
        @vote = Vote.new(vote_params)
        if @vote.save
            render 'api/votes/show'
        else
            render json: @vote.errors.full_messages, status: 422
        end
    end

    private
    def vote_params
        params.require(:vote).permit(:vote_type, :post_type, :post_id)
    end
end
