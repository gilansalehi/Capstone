json.extract!(article, :id, :title, :body, :fragment, :author_id, :table_of_contents, :updated_at)
json.image_url asset_path(article.image.url)
