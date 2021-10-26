class BrandsController < ApplicationController
    def index
        @brands = Brand.all

        render json: @brands
    end

    def show
        @brand = Brand.find(params[:id])
        if @brand
            render json: @brand
        else
            render json: {error: "Brand not found"}, status: 404
        end
    end

    def create
        @brand = Brand.new(brand_params)
        if @brand.save
            render json: @brand, status: 201
        else
            render json: {error: "Unable to create brand"}, status: 400
        end
    end

    def destroy
        @brand = Brand.find(params[:id])
        if @brand
            @brand.destroy
            render json: {message: "Brand deleted"}, status: 200
        else
            render json: {error: "Brand not found"}, status: 404
        end
    end

    private

    def brand_params
        params.require(:brand).permit(:name, :image)
    end
end
