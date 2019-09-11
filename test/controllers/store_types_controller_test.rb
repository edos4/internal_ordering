require 'test_helper'

class StoreTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @store_type = store_types(:one)
  end

  test "should get index" do
    get store_types_url
    assert_response :success
  end

  test "should get new" do
    get new_store_type_url
    assert_response :success
  end

  test "should create store_type" do
    assert_difference('StoreType.count') do
      post store_types_url, params: { store_type: { name: @store_type.name } }
    end

    assert_redirected_to store_type_url(StoreType.last)
  end

  test "should show store_type" do
    get store_type_url(@store_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_store_type_url(@store_type)
    assert_response :success
  end

  test "should update store_type" do
    patch store_type_url(@store_type), params: { store_type: { name: @store_type.name } }
    assert_redirected_to store_type_url(@store_type)
  end

  test "should destroy store_type" do
    assert_difference('StoreType.count', -1) do
      delete store_type_url(@store_type)
    end

    assert_redirected_to store_types_url
  end
end
