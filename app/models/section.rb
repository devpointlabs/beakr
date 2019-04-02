class Section < ApplicationRecord
  belongs_to :course
  has_many :units, dependent: :destroy
end
