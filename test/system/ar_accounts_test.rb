require "application_system_test_case"

class ArAccountsTest < ApplicationSystemTestCase
  setup do
    @ar_account = ar_accounts(:one)
  end

  test "visiting the index" do
    visit ar_accounts_url
    assert_selector "h1", text: "Ar Accounts"
  end

  test "creating a Ar account" do
    visit ar_accounts_url
    click_on "New Ar Account"

    fill_in "Name", with: @ar_account.name
    click_on "Create Ar account"

    assert_text "Ar account was successfully created"
    click_on "Back"
  end

  test "updating a Ar account" do
    visit ar_accounts_url
    click_on "Edit", match: :first

    fill_in "Name", with: @ar_account.name
    click_on "Update Ar account"

    assert_text "Ar account was successfully updated"
    click_on "Back"
  end

  test "destroying a Ar account" do
    visit ar_accounts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ar account was successfully destroyed"
  end
end
