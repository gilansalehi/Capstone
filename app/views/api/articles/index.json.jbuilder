json.array!(@articles) do |article|
  json.extract!(article, :id, :title, :body, :author_id)
end
