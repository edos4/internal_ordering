class User < ApplicationRecord
  enum role: { admin: 'admin', checker: 'checker', bookkeeper: 'bookkeeper', cashier: 'cashier', boss: 'boss' }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

   def self.update_user(user)
   		@user = User.find(user['user_id'])
   		if user['role'].present?
	      @user.update!(email: user['email'], password: user['password'], role: user['role'])
	    else
	      @user.update!(email: user['email'], password: user['password'])
	    end
   end
end
