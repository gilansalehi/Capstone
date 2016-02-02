json.total_count @search_results.total_count
json.results do
  json.array! @search_results do |result|
    result = result.searchable

    json.partial!("api/articles/article", article: result)
  end
end
