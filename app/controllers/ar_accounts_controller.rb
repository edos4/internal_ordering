class ArAccountsController < ApplicationController
  before_action :set_ar_account, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_action :admin_only_access
  # GET /ar_accounts
  # GET /ar_accounts.json
  def index
    @ar_accounts = ArAccount.all
  end

  # GET /ar_accounts/1
  # GET /ar_accounts/1.json
  def show
  end

  # GET /ar_accounts/new
  def new
    @ar_account = ArAccount.new
  end

  # GET /ar_accounts/1/edit
  def edit
  end

  # POST /ar_accounts
  # POST /ar_accounts.json
  def create
    @ar_account = ArAccount.new(ar_account_params)

    respond_to do |format|
      if @ar_account.save
        format.html { redirect_to ar_accounts_url, notice: 'Ar account was successfully created.' }
      else
        format.html { render :new }
        format.json { render json: @ar_account.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ar_accounts/1
  # PATCH/PUT /ar_accounts/1.json
  def update
    respond_to do |format|
      if @ar_account.update(ar_account_params)
        format.html { redirect_to ar_accounts_url, notice: 'Ar account was successfully updated.' }
      else
        format.html { render :edit }
        format.json { render json: @ar_account.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ar_accounts/1
  # DELETE /ar_accounts/1.json
  def destroy
    @ar_account.destroy
    respond_to do |format|
      format.html { redirect_to ar_accounts_url, notice: 'Ar account was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ar_account
      @ar_account = ArAccount.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ar_account_params
      params.require(:ar_account).permit(:name)
    end
end
