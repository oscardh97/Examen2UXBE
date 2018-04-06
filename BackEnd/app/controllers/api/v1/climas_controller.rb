module Api::V1
  class ClimasController < ApplicationController
    def index
      @climas = Clima.all
      render json: @climas
    end

    def create
    	@clima = Clima.create(clima_params)
    	render json: @clima
    end

    private
    	def clima_params
    		params.require(:clima).permit(:ciudad, :temperatura,:estado)
    	end
  end
end