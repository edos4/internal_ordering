class Category < ApplicationRecord
	mount_uploader :image, ImgUploader
	belongs_to :merchant, optional: true
	has_many :products
end

