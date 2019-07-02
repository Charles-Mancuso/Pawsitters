@sitters.each do |sitter|
    json.set! sitter.id do
        json.partial! "sitter", sitter: sitter
        json.image_url image_path(sitter.image_url)
    end
end