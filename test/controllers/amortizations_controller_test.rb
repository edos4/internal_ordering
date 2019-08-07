require 'test_helper'

class AmortizationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @amortization = amortizations(:one)
  end

  test "should get index" do
    get amortizations_url
    assert_response :success
  end

  test "should get new" do
    get new_amortization_url
    assert_response :success
  end

  test "should create amortization" do
    assert_difference('Amortization.count') do
      post amortizations_url, params: { amortization: { blocklot: @amortization.blocklot, contract_date: @amortization.contract_date, contract_price: @amortization.contract_price, customer: @amortization.customer, downpayment: @amortization.downpayment, interest: @amortization.interest, monthly_amort: @amortization.monthly_amort, processing_fees: @amortization.processing_fees, terms: @amortization.terms } }
    end

    assert_redirected_to amortization_url(Amortization.last)
  end

  test "should show amortization" do
    get amortization_url(@amortization)
    assert_response :success
  end

  test "should get edit" do
    get edit_amortization_url(@amortization)
    assert_response :success
  end

  test "should update amortization" do
    patch amortization_url(@amortization), params: { amortization: { blocklot: @amortization.blocklot, contract_date: @amortization.contract_date, contract_price: @amortization.contract_price, customer: @amortization.customer, downpayment: @amortization.downpayment, interest: @amortization.interest, monthly_amort: @amortization.monthly_amort, processing_fees: @amortization.processing_fees, terms: @amortization.terms } }
    assert_redirected_to amortization_url(@amortization)
  end

  test "should destroy amortization" do
    assert_difference('Amortization.count', -1) do
      delete amortization_url(@amortization)
    end

    assert_redirected_to amortizations_url
  end
end
