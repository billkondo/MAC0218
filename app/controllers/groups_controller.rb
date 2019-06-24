class GroupsController < ApplicationController
  def create
    group = Group.new(group_params)

    if group.save
      render json: { 
        status: 'OK', 
        id: group.id
      }
    else
      render json: {
        status: 'ERROR'
      }
    end
  end

  def current_user_groups
    groups = current_user.Group.all

    print grups.as_json

    print "\n\n"

    render json: {
      status: 'OK'
    }
  end

  def read
    id = params[:id]
    print id
    print "\n"
    group = Group.select(:title, :id, :description, :status).find(id)

    render json: {
      status: 'OK', 
      group: group.as_json
    }
  end

  private
    def group_params
      params.require(:group).permit(:title, :description, :status)
    end
end
