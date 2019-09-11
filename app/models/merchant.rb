class Merchant < ApplicationRecord
	mount_uploader :logo, ImgUploader
	has_many :categories
	belongs_to :store_type
end
