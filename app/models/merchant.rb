class Merchant < ApplicationRecord
	mount_uploader :logo, ImgUploader
	has_many :categories
end
