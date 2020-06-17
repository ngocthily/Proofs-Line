class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all
        render :index
    end

    def create
        @question = Question.new(question_params)
        @question.author_id = current_user.id
        if @question.save
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def show
       @question = Question.find(params[:id])
       if @question
            render :show
       else
            render json: @question.errors.full_messages, status: 402
       end
    end

    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render :show
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    def destroy
        @question = Question.find(params[:id])
        if @question
            @question.destroy
            render :show
        else
            render json:["Can't find question"]
        end
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :author_id)
    end
end
