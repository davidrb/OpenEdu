class TopicController < ApplicationController
  before_action :authenticate_user

  def queue
    completions = current_user.completions.map { |c| c.topic_id }
    queue = Topic.all.map { |t| t.id } - completions

    Requirement.all.each do |r|
      unless completions.include?(r.required_topic)
        queue.delete r.topic.id
      end
    end

    render json: queue
  end

  def complete
    completion = Completion.new user: current_user, topic_id: params[:id].to_i
    render json: completion.save
  end
end
