class Post < ApplicationRecord

  validates :title, presence: true
  validates :description, presence: true

  after_create :push_notification


  def push_notification
    ActionCable.server.broadcast(
                          "posts",
                          post: json_view,
                          title: title
    )
  end

  def json_view
    PostsController.render(partial: "posts/posts", locals: {post: self})
  end
end
