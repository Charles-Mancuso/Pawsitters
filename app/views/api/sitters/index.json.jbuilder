@sitters.each do |sitter|
    json.set! sitter.id do
        json.partial! "sitter", sitter: sitter
    end
end