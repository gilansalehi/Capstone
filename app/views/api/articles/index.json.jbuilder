json.array!(@articles) do |article|
  json.extract!(article, :id, :title, :body, :fragment, :author_id, :updated_at)
end
