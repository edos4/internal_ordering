class BotController < ApplicationController
  #before_action :set_category, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def self.send_chatfuel(messenger_id, block_name, order_id, driver_id)
    require 'rest-client'
    require 'json'

    RestClient::Request.new({
      method: :post,
      url: "https://api.chatfuel.com/bots/5d4d0b8f4c69c80001e289b5/users/#{messenger_id}/send?chatfuel_token=mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD&chatfuel_message_tag=CONFIRMED_EVENT_REMINDER&chatfuel_block_name=#{block_name}&order_id=#{order_id}&driver_id=#{driver_id}",
      headers: { 
        accept: :json, 
        content_type: :json
      }
    }).execute do |response, request, result|
      case response.code
      when 200..299
        [ :success, response.to_str ]
      else
        error_object = {:error_code=> response.code, :msg => response.to_str}
        fail error_object.to_json 
      end
    end
  end

  def self.send_chatfuel_msg(messenger_id, block_name, params)
    require 'rest-client'
    require 'json'

    RestClient::Request.new({
      method: :post,
      url: "https://api.chatfuel.com/bots/5d4d0b8f4c69c80001e289b5/users/#{messenger_id}/send?chatfuel_token=mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD&chatfuel_message_tag=CONFIRMED_EVENT_REMINDER&chatfuel_block_name=#{block_name}&#{params}",
      headers: { 
        accept: :json, 
        content_type: :json
      }
    }).execute do |response, request, result|
      case response.code
      when 200..299
        [ :success, response.to_str ]
      else
        error_object = {:error_code=> response.code, :msg => response.to_str}
        fail error_object.to_json 
      end
    end
  end

end
