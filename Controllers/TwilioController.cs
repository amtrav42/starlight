using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace Starlight.Interactive.Playhub.Controllers
{
    public class TwilioController : Twilio.AspNet.Core.TwilioController
    {
        private IConfiguration _configuration;
        public TwilioController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("twilio/call")]
        public void Index()
        {
            // Find your Account Sid and Auth Token at twilio.com/console
            string accountSid = "AC143b3bec7037b31ce25589acd8befb8d";
            string authToken = _configuration.GetValue<string>("TwilioToken");
            TwilioClient.Init(accountSid, authToken);

            var to = new PhoneNumber(_configuration.GetValue<string>("PhoneNumber:To"));
            var from = new PhoneNumber("+12055574475");
            var call = CallResource.Create(to, from,
                url: new Uri("http://demo.twilio.com/docs/voice.xml"));
        }
    }
}