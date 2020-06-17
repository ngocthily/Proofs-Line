class Vote < ApplicationRecord
    validates :vote_type, presence: true
    validates :post_type, presence: true
    # validates :answer_id
    # validates :question_id

    validates_uniqueness_of :user_id, scope: :answer_id

    belongs_to :user
    
    belongs_to :answer,
        foreign_key: :answer_id,
        class_name: :Answer

    # belongs_to :question,
    #     foreign_key: :question_id,
    #     class_name: :Question
end
