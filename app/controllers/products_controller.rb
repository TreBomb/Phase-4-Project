class ProductsController < ApplicationController
    def index
        @products = Product.all.shuffle
        render json: @products
    end

    def show
        @product = Product.find(params[:id])
        if @product
            render json: @product
        else
            render json: {error: "Product not found"}, status: 404
        end
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render json: @product, status: 201
        else
            render json: {error: "Product not created"}, status: 400
        end
    end

    def destroy
        @product = Product.find(params[:id])
        if @product
            @product.destroy
            render json: {message: "Product deleted"}, status: 200
        else
            render json: {error: "Product not found"}, status: 404
        end
    end

    private

    def product_params
        params.require(:product).permit(:name, :description, :image, :price, :rating, :brand_id)
    end
end
