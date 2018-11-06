class CreateRequirements < ActiveRecord::Migration[5.1]
  def change
    create_table :requirements do |t|
      t.references :topic, foreign_key: true
      t.integer :required_topic

      t.timestamps
    end
  end
end
