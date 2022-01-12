// Create a function, define a variable IDme. Open in a new window. 
$(function() {
    var IDme = {
      access_token: window.location.hash.split("&")[0].match(/[^#access_token=]\w+/)[0],
// Create a function params, return the api and access token.   
      params: function() {
        return {
          url: "https://api.id.me/api/public/v3/attributes.json?access_token=" + this.access_token,
          dataType: "jsonp"
        }
      },
// Create a function request, using access token and parameters, then verified. Display message. 
      request: function() {
        if (this.access_token) {
          $.get(this.params()).done(function(payload) {
            if (payload.status[0].verified) {
              $("#idme-button").hide();
              $("#idme-button").before("<span>Thank you " + payload.attributes[0].value + " for verifying your " + payload.status[0].subgroups[0] + " status with ID.me.</span>");
            }
          });
        }
      }
    };
// Execute request function.   
    IDme.request();
  });
  
  