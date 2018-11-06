class CreateCompletions < ActiveRecord::Migration[5.1]
  def change
    create_table :completions do |t|
      t.references :user, foreign_key: true
      t.references :topic, foreign_key: true

      t.timestamps
    end
  end
end
