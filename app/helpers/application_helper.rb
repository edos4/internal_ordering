module ApplicationHelper

	def admin_only_access
		unless current_user.admin? || current_user.bookkeeper?
			redirect_to '/amortizations'
		end
	end

	def restrict_access_to_cashier
		if current_user.cashier?
			redirect_to '/amortizations'
		end
	end

	def restrict_access_to_boss
		if current_user.boss?
			redirect_to '/summary_collections'
		end
	end

	def format_num(num)
		number_with_precision(num, delimiter: ",", separator: ".", precision: 2)
	end

	def active_controller? data
        if data[:action].nil?
            "current" if params[:controller] == data[:controller]
        else
            "current" if params[:controller] == data[:controller] && params[:action] == data[:action]
        end
    end
end
