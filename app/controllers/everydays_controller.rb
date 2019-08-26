class EverydaysController < ApplicationController
  before_action :set_everyday, only: [:show, :edit, :update, :destroy]

  # GET /everydays
  # GET /everydays.json
  def index
    @everydays = Everyday.all
  end

  # GET /everydays/1
  # GET /everydays/1.json
  def show
  end

  # GET /everydays/new
  def new
    @everyday = Everyday.new
  end

  # GET /everydays/1/edit
  def edit
  end

  # POST /everydays
  # POST /everydays.json
  def create
    @everyday = Everyday.new(everyday_params)

    respond_to do |format|
      if @everyday.save
        format.html { redirect_to everydays_url, notice: 'Everyday was successfully created.' }
        format.json { render :show, status: :created, location: @everyday }
      else
        format.html { render :new }
        format.json { render json: @everyday.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /everydays/1
  # PATCH/PUT /everydays/1.json
  def update
    respond_to do |format|
      if @everyday.update(everyday_params)
        format.html { redirect_to everydays_url, notice: 'Everyday was successfully updated.' }
        format.json { render :show, status: :ok, location: @everyday }
      else
        format.html { render :edit }
        format.json { render json: @everyday.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /everydays/1
  # DELETE /everydays/1.json
  def destroy
    @everyday.destroy
    respond_to do |format|
      format.html { redirect_to everydays_url, notice: 'Everyday was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_everyday
      @everyday = Everyday.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def everyday_params
      params.require(:everyday).permit(:name, :image, :category, :description, :ev_order)
    end
end
