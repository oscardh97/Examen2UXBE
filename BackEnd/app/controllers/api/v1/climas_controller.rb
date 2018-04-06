module Api::V1
  class ClimasController < ApplicationController
    def index
      @climas = Clima.all
      render json: @climas
    end
  end
end