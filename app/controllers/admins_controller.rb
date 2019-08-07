class AdminsController < ApplicationController
  before_action :authenticate_user!
  before_action :admin_only_access
  
  def index
  	@users = User.all
  end

  def create_user
  	params.permit!
  	user = User.create(email: params['user']['email'], password: params['user']['password'], role: params['user']['role'])
  	redirect_to '/admins/index'
  end

  def edit_user
  	params.permit!
  	@user = User.find(params['id'])
  end

  def update_user
  	params.permit!
  	User.update_user(params['user'])
  	redirect_to '/admins/index'
  end

  def destroy_user
  	params.permit!
  	@user = User.find(params['id'])
  	@user.destroy!
  	redirect_to '/admins/index'
  end
end
