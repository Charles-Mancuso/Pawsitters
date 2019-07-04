json.bookings do 
    @bookings.each do |booking|
        json.set! booking.id do
            json.partial! "booking", booking: booking
        end
    end
end

json.sitters do 
    @bookings.each do |booking|
        json.set! booking.sitter.id do 
            json.partial! 'api/sitters/sitter', sitter: booking.sitter
        end
    end
end


