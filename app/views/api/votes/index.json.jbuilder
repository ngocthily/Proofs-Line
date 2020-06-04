@votes.each do |vote|
    json.set! vote.id do
        json.extract! vote, :id, :vote_type, :post_type, :post_id
    end
end