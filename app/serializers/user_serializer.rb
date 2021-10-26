class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :seller
end
