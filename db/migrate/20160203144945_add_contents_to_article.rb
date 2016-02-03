class AddContentsToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :table_of_contents, :text
  end
end
