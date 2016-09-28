class AtomsController < ApplicationController

  def new

  end

  def create
    render plain: params[:atom].inspect
  end

  def delete
  end



end
