require 'digest/sha2'
class Mass < ActionMailer::Base
  default from: "dilip@erosystems.tk"
   default "Message-ID"=>"#{Digest::SHA2.hexdigest(Time.now.to_i.to_s)}@erosystems.tk"

  def maill(params) 
  @parms = params
  mail(to: @parms[:email], subject: @parms[:message])
  end




  def mydelivery(params)
  	@parms = params
  	
  	mail(to: "dilip@erosystems.tk", subject: "Website Form Message", from: @parms[:email] ,template_path: 'mass',template_name: 'mydelivery')

  end

  def  reply_my_mail params
    @parms = params

    mail(to: @parms[:email], subject: @parms[:subject],template_path: 'mass',template_name: 'reply_mail')    
  end
end
