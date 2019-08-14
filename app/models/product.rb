class Product < ApplicationRecord
	mount_uploader :image, ImgUploader
	belongs_to :category
	has_many :variants
end
