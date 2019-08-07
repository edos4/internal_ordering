require "application_system_test_case"

class AmortizationsTest < ApplicationSystemTestCase
  setup do
    @amortization = amortizations(:one)
  end

  test "visiting the index" do
    visit amortizations_url
    assert_selector "h1", text: "Amortizations"
  end

  test "creating a Amortization" do
    visit amortizations_url
    click_on "New Amortization"

    fill_in "Blocklot", with: @amortization.blocklot
    fill_in "Contract date", with: @amortization.contract_date
    fill_in "Contract price", with: @amortization.contract_price
    fill_in "Customer", with: @amortization.customer
    fill_in "Downpayment", with: @amortization.downpayment
    fill_in "Interest", with: @amortization.interest
    fill_in "Monthly amort", with: @amortization.monthly_amort
    fill_in "Processing fees", with: @amortization.processing_fees
    fill_in "Terms", with: @amortization.terms
    click_on "Create Amortization"

    assert_text "Amortization was successfully created"
    click_on "Back"
  end

  test "updating a Amortization" do
    visit amortizations_url
    click_on "Edit", match: :first

    fill_in "Blocklot", with: @amortization.blocklot
    fill_in "Contract date", with: @amortization.contract_date
    fill_in "Contract price", with: @amortization.contract_price
    fill_in "Customer", with: @amortization.customer
    fill_in "Downpayment", with: @amortization.downpayment
    fill_in "Interest", with: @amortization.interest
    fill_in "Monthly amort", with: @amortization.monthly_amort
    fill_in "Processing fees", with: @amortization.processing_fees
    fill_in "Terms", with: @amortization.terms
    click_on "Update Amortization"

    assert_text "Amortization was successfully updated"
    click_on "Back"
  end

  test "destroying a Amortization" do
    visit amortizations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Amortization was successfully destroyed"
  end
end
