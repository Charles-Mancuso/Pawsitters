json.sitter do
    json.partial! 'api/sitters/sitter', sitter: @sitter
    json.image_url asset_path(@sitter.image_url)
end