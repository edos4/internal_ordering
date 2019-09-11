require "application_system_test_case"

class StoreTypesTest < ApplicationSystemTestCase
  setup do
    @store_type = store_types(:one)
  end

  test "visiting the index" do
    visit store_types_url
    assert_selector "h1", text: "Store Types"
  end

  test "creating a Store type" do
    visit store_types_url
    click_on "New Store Type"

    fill_in "Name", with: @store_type.name
    click_on "Create Store type"

    assert_text "Store type was successfully created"
    click_on "Back"
  end

  test "updating a Store type" do
    visit store_types_url
    click_on "Edit", match: :first

    fill_in "Name", with: @store_type.name
    click_on "Update Store type"

    assert_text "Store type was successfully updated"
    click_on "Back"
  end

  test "destroying a Store type" do
    visit store_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Store type was successfully destroyed"
  end
end
