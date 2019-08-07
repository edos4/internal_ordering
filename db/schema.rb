# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_01_061521) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amortization_line_items", force: :cascade do |t|
    t.integer "term"
    t.integer "amortization_id"
    t.date "period"
    t.float "principal"
    t.float "interest"
    t.float "monthly_amort"
    t.float "balance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_paid", default: false
  end

  create_table "amortizations", force: :cascade do |t|
    t.string "customer"
    t.string "blocklot"
    t.float "contract_price"
    t.float "processing_fees"
    t.float "downpayment"
    t.integer "terms"
    t.float "interest"
    t.float "monthly_amort"
    t.date "contract_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "balance", default: 0.0
    t.integer "ar_account_id"
    t.date "amortization_start_date"
  end

  create_table "ar_accounts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bank_accounts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "payment_histories", force: :cascade do |t|
    t.integer "amortization_id"
    t.float "current_balance"
    t.float "interest", default: 0.0
    t.float "payment", default: 0.0
    t.float "new_balance", default: 0.0
    t.string "mode_of_payment"
    t.string "check_bank"
    t.string "check_no"
    t.integer "bank_account_id"
    t.integer "ar_account_id"
    t.float "penalty", default: 0.0
    t.float "processing", default: 0.0
    t.float "reservation", default: 0.0
    t.float "equity", default: 0.0
    t.float "others", default: 0.0
    t.float "advance_payment_to_principal", default: 0.0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "principal"
    t.float "downpayment", default: 0.0
    t.float "processing_fee", default: 0.0
    t.date "payment_date"
    t.string "or_num"
    t.string "memo"
    t.float "running_balance"
    t.boolean "is_deposited", default: false
    t.date "deposited_date"
    t.string "deposited_memo"
    t.integer "deposited_bank_account_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
