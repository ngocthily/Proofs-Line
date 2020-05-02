class Api::QuestionsController < ApplicationController
    before_action :required_logged_in, only: [:create]

    def new
        @question = Question.new
        render :new
    end

    def index
        @questions = if params[:user_id]
                        Question.where(author_id: params[:user_id])
                    else
                        Question.all
                    end
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
       @question = selected_question
       if @question
            render :show
       else
            render json: @question.errors.full_messages, status: 402
       end
    end

    def update
        @question = selected_question
        if @question.update(question_params)
            render :show
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
            render json:["Can't find question"]
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
