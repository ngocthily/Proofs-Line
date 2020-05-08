class Question < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :answers, :dependent => :destroy
end
