class Vote < ApplicationRecord
    validates :vote_type, presence: true
    validates :post_type, presence: true
    validates :answer_id, presence: true

    belongs_to :user
    
    belongs_to :answer,
        foreign_key: :answer_id,
        class_name: :Answer
end
