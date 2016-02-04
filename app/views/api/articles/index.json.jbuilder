json.array!(@articles) do |article|
  json.extract!(article, :id, :title, :body, :fragment, :author_id, :table_of_contents, :updated_at)
end

# json.partial! 'api/articles/article', collection: @articles, as: :article
