json.extract! payment_history, :id, :amortization_id, :current_balance, :interest, :payment, :new_balance, :mode_of_payment, :check_bank, :check_no, :bank_account_id, :ar_account_id, :penalty, :processing, :reservation, :equity, :others, :advance_payment_to_principal, :created_at, :updated_at
json.url payment_history_url(payment_history, format: :json)
