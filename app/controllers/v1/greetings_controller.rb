module V1
  class GreetingsController < ApplicationController
    def index
      random = Random.new
      limit = Greeting.all.length
      @greeting = Greeting.find(random.rand(1..limit)).description
      render json: @greeting
    end
  end
end
