require "application_system_test_case"

class EverydaysTest < ApplicationSystemTestCase
  setup do
    @everyday = everydays(:one)
  end

  test "visiting the index" do
    visit everydays_url
    assert_selector "h1", text: "Everydays"
  end

  test "creating a Everyday" do
    visit everydays_url
    click_on "New Everyday"

    fill_in "Category", with: @everyday.category
    fill_in "Image", with: @everyday.image
    fill_in "Name", with: @everyday.name
    click_on "Create Everyday"

    assert_text "Everyday was successfully created"
    click_on "Back"
  end

  test "updating a Everyday" do
    visit everydays_url
    click_on "Edit", match: :first

    fill_in "Category", with: @everyday.category
    fill_in "Image", with: @everyday.image
    fill_in "Name", with: @everyday.name
    click_on "Update Everyday"

    assert_text "Everyday was successfully updated"
    click_on "Back"
  end

  test "destroying a Everyday" do
    visit everydays_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Everyday was successfully destroyed"
  end
end
