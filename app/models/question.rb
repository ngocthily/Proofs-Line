class Question < ApplicationRecord
    validates :title, :body, presence: true
    validates :author_id, presence: true

    belongs_to :user
end
