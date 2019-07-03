class Api::BookingsController < ApplicationController

    def index
        @bookings = Booking.where(user_id: current_user.id)
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        render 'api/bookings/show'
    end

    def create 
        @booking = Booking.new(booking_params)
        @booking.user_id = current_user.id

        if @booking.save
            render 'api/bookings/show'
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update
        @booking = Booking.find(params[:id])

        if @booking.save(booking_params)
            render 'api/bookings/show'
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        render 'api/bookings/show' 
    end

    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :sitter_id)
    end

end