class CreateAtoms < ActiveRecord::Migration[5.0]
  def change
    create_table :atoms do |t|
      t.string :name
      t.string :html
      t.string :yaml

      t.timestamps
    end
  end
end
