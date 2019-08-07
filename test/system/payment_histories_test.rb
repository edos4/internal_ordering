require "application_system_test_case"

class PaymentHistoriesTest < ApplicationSystemTestCase
  setup do
    @payment_history = payment_histories(:one)
  end

  test "visiting the index" do
    visit payment_histories_url
    assert_selector "h1", text: "Payment Histories"
  end

  test "creating a Payment history" do
    visit payment_histories_url
    click_on "New Payment History"

    fill_in "Advance payment to principal", with: @payment_history.advance_payment_to_principal
    fill_in "Amortization", with: @payment_history.amortization_id
    fill_in "Ar account", with: @payment_history.ar_account_id
    fill_in "Bank account", with: @payment_history.bank_account_id
    fill_in "Check bank", with: @payment_history.check_bank
    fill_in "Check no", with: @payment_history.check_no
    fill_in "Current balance", with: @payment_history.current_balance
    fill_in "Equity", with: @payment_history.equity
    fill_in "Interest", with: @payment_history.interest
    fill_in "Mode of payment", with: @payment_history.mode_of_payment
    fill_in "New balance", with: @payment_history.new_balance
    fill_in "Others", with: @payment_history.others
    fill_in "Payment", with: @payment_history.payment
    fill_in "Penalty", with: @payment_history.penalty
    fill_in "Processing", with: @payment_history.processing
    fill_in "Reservation", with: @payment_history.reservation
    click_on "Create Payment history"

    assert_text "Payment history was successfully created"
    click_on "Back"
  end

  test "updating a Payment history" do
    visit payment_histories_url
    click_on "Edit", match: :first

    fill_in "Advance payment to principal", with: @payment_history.advance_payment_to_principal
    fill_in "Amortization", with: @payment_history.amortization_id
    fill_in "Ar account", with: @payment_history.ar_account_id
    fill_in "Bank account", with: @payment_history.bank_account_id
    fill_in "Check bank", with: @payment_history.check_bank
    fill_in "Check no", with: @payment_history.check_no
    fill_in "Current balance", with: @payment_history.current_balance
    fill_in "Equity", with: @payment_history.equity
    fill_in "Interest", with: @payment_history.interest
    fill_in "Mode of payment", with: @payment_history.mode_of_payment
    fill_in "New balance", with: @payment_history.new_balance
    fill_in "Others", with: @payment_history.others
    fill_in "Payment", with: @payment_history.payment
    fill_in "Penalty", with: @payment_history.penalty
    fill_in "Processing", with: @payment_history.processing
    fill_in "Reservation", with: @payment_history.reservation
    click_on "Update Payment history"

    assert_text "Payment history was successfully updated"
    click_on "Back"
  end

  test "destroying a Payment history" do
    visit payment_histories_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Payment history was successfully destroyed"
  end
end
