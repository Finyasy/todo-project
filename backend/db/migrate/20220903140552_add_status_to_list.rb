class AddStatusToList < ActiveRecord::Migration[6.1]
  def change
    add_column :lists, :status, :boolean
  end
end
