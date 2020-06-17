class Api::AnswersController < ApplicationController
    def index 
        @answers = Answer.all
        render :index
    end

    def show
       @answer = Answer.find(params[:id])
       if @answer
            render :show
       else
            render json: @answer.errors.full_messages, status: 402
       end
    end
    
    def create
        @answer = Answer.new(answer_params)
        if @answer.save
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def destroy
        @answer = Answer.find(params[:id])
        if @answer
            @answer.destroy
        else
            render json: ["Can't find answer"]
        end
    end

    private
    def answer_params
        params.require(:answer).permit(:body, :user_id, :question_id)
    end
end
