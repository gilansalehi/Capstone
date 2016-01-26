json.array!(@whats_new) do |article|
  json.extract!(article, :id, :title, :body, :author_id)
end
