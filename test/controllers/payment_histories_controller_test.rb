require 'test_helper'

class PaymentHistoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @payment_history = payment_histories(:one)
  end

  test "should get index" do
    get payment_histories_url
    assert_response :success
  end

  test "should get new" do
    get new_payment_history_url
    assert_response :success
  end

  test "should create payment_history" do
    assert_difference('PaymentHistory.count') do
      post payment_histories_url, params: { payment_history: { advance_payment_to_principal: @payment_history.advance_payment_to_principal, amortization_id: @payment_history.amortization_id, ar_account_id: @payment_history.ar_account_id, bank_account_id: @payment_history.bank_account_id, check_bank: @payment_history.check_bank, check_no: @payment_history.check_no, current_balance: @payment_history.current_balance, equity: @payment_history.equity, interest: @payment_history.interest, mode_of_payment: @payment_history.mode_of_payment, new_balance: @payment_history.new_balance, others: @payment_history.others, payment: @payment_history.payment, penalty: @payment_history.penalty, processing: @payment_history.processing, reservation: @payment_history.reservation } }
    end

    assert_redirected_to payment_history_url(PaymentHistory.last)
  end

  test "should show payment_history" do
    get payment_history_url(@payment_history)
    assert_response :success
  end

  test "should get edit" do
    get edit_payment_history_url(@payment_history)
    assert_response :success
  end

  test "should update payment_history" do
    patch payment_history_url(@payment_history), params: { payment_history: { advance_payment_to_principal: @payment_history.advance_payment_to_principal, amortization_id: @payment_history.amortization_id, ar_account_id: @payment_history.ar_account_id, bank_account_id: @payment_history.bank_account_id, check_bank: @payment_history.check_bank, check_no: @payment_history.check_no, current_balance: @payment_history.current_balance, equity: @payment_history.equity, interest: @payment_history.interest, mode_of_payment: @payment_history.mode_of_payment, new_balance: @payment_history.new_balance, others: @payment_history.others, payment: @payment_history.payment, penalty: @payment_history.penalty, processing: @payment_history.processing, reservation: @payment_history.reservation } }
    assert_redirected_to payment_history_url(@payment_history)
  end

  test "should destroy payment_history" do
    assert_difference('PaymentHistory.count', -1) do
      delete payment_history_url(@payment_history)
    end

    assert_redirected_to payment_histories_url
  end
end
