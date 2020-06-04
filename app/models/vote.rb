class Vote < ApplicationRecord
    validates_inclusion_of :vote_type, :in => %w( upvote downvote )
    validates_inclusion_of :post_type, :in => %w( question answer)
    validates :post_id, presence: true

    belongs_to :user

    belongs_to :post, polymorphic: true
end
