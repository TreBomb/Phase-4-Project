class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :price, :rating
  has_one :brand
end
