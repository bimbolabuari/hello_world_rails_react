module V1
  class GreetingsController < ApplicationController
    def index
      @greeting = Greeting.offset(rand(Greeting.count)).first || 'No greeting available yet'
      render json: @greeting
    end
  end
end
