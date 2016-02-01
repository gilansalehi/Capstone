json.array!(@articles) do |article|
  json.extract!(article, :id, :title, :body, :fragment, :author_id)
end
