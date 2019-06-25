class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates_presence_of :username
  validates_uniqueness_of :username

  has_many :multiple_choice_problems, dependent: :destroy
  has_many :multiple_choice_favorites, dependent: :destroy

  has_many :write_problems, dependent: :destroy
  has_many :write_favorites, dependent: :destroy
end
