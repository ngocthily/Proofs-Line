class Api::QuestionsController < ApplicationController
    before_action :required_logged_in, only: [:create]

    def index
        @questions = Question.all
    end

    def create
        @question = Question.create!(question_params)
        render :show
    end

    def show
        @question = selected_question
    end

    def update
        @question = selected_question
        if @question && @question.update_attributes(question_params)
            render :show
        elsif !@question
            render json: ["Can't find question"], status: 400
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    def destroy
        @question = selected_question
        if @question
            @question.destroy
            render :show
        else
            render ["Can't find question"]
        end
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :author_id)
    end

    def selected_question
        @question = Question.find(params[:id])
    end
end
