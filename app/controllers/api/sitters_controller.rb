class Api::SittersController < ApplicationController

    def index
        @sitters = Sitter.all
        render :index
    end

    def show
        @sitter = Sitter.find(params[:id])
        render json: @sitter
    end

    def create
        @sitter = Sitter.create!(sitter_params)

        if @sitter.save
            render "api/sitters/show"
        else
            render json: @user.errors.full_messages, status:404
        end
    end

    def update

    end

    def destroy

    end

    private

    def sitter_params
        params.require(:sitter).permit(
            :user_id, 
            :city,
            :state,
            :country,
            :zip,
            :title,
            :sitter_bio,
            :home_type,
            :is_boarding,
            :is_sitting,
            :is_visiting,
            :is_daycare,
            :is_walking,
            :boarding_price,
            :sitting_price,
            :daycare_price,
            :visiting_price,
            :walking_price,
            :is_small_dog,
            :is_medium_dog,
            :is_large_dog,
            :is_giant_dog,
            :lat,
            :lng
        )
    end
end
