require 'test_helper'

class ArAccountsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ar_account = ar_accounts(:one)
  end

  test "should get index" do
    get ar_accounts_url
    assert_response :success
  end

  test "should get new" do
    get new_ar_account_url
    assert_response :success
  end

  test "should create ar_account" do
    assert_difference('ArAccount.count') do
      post ar_accounts_url, params: { ar_account: { name: @ar_account.name } }
    end

    assert_redirected_to ar_account_url(ArAccount.last)
  end

  test "should show ar_account" do
    get ar_account_url(@ar_account)
    assert_response :success
  end

  test "should get edit" do
    get edit_ar_account_url(@ar_account)
    assert_response :success
  end

  test "should update ar_account" do
    patch ar_account_url(@ar_account), params: { ar_account: { name: @ar_account.name } }
    assert_redirected_to ar_account_url(@ar_account)
  end

  test "should destroy ar_account" do
    assert_difference('ArAccount.count', -1) do
      delete ar_account_url(@ar_account)
    end

    assert_redirected_to ar_accounts_url
  end
end
