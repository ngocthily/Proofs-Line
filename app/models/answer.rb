class Answer < ApplicationRecord
    validates :body, presense: true
    validates :user_id, presence: true
    validates :question_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :question,
        foreign_key: :question_id,
        class_name: :Question
end
