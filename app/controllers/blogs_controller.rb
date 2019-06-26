class BlogsController < ApplicationController
  def create
    # create blog posts in a groap

    blog = Blog.new()

    # Check params
    # TODO
    
    # Build blog
    blog.title = params[:blog][:title]
    blog.sub_title = params[:blog][:sub_title]
    blog.body = params[:blog][:body]
    blog.group_id = params[:group_id]

    if blog.save
      render json: { 
        status: 'OK'
      }
    else
      render json: {
        status: 'ERROR'
      }
    end
  end

  def get_all
    # get blog posts from a group

    # Check params
    # TODO

    group_id = params[:group_id]

    blogs = Blog.order(created_at: :desc).where(group_id: group_id)

    render json: {
      status: 'OK',
      blogs: blogs.as_json
    }
  end

  def read
    # Check params
    # TODO

    blog_id = params[:blog_id]
    group_id = params[:group_id]

    blog = Blog.find(blog_id)
    group = Group.find(group_id)

    render json: {
      status: 'OK', 
      blog: blog.as_json,
      group: group.as_json
    }
  end
end
