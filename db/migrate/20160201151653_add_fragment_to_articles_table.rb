class AddFragmentToArticlesTable < ActiveRecord::Migration
  def change
    add_column :articles, :fragment, :text
  end
end
