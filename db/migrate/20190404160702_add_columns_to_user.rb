class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :biography, :text, default: ""
    add_column :users, :birth_date, :date
  end
end
