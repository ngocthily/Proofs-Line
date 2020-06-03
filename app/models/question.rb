class Question < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :author_id, presence: true
    # validates :author, presence: true

    belongs_to :authored,
        foreign_key: :author_id,
        class_name: :User

    # belongs_to :user,
    #     foreign_key: :author,
    #     class_name: :User

    has_many :answers, :dependent => :destroy
end
