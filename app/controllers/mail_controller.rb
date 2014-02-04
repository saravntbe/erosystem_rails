class MailController < ApplicationController
  http_basic_authenticate_with :name => "dilip@ero", :password => "ERO$prakash@dilip", only: 'index'
  def index
  end

  def reply_mai
    @params = params
    
    #render text: @params[:subject]
    Mass.reply_my_mail(@params).deliver
    render text: "Thanks! Mail Delivered"
  end

  def show

  end
  def sendmails
    @params = params
    Mass.maill(@params).deliver
    Mass.mydelivery(@params).deliver
    render text: "Thanks! Mail Delivered"
  end
end
