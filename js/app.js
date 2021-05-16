$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    
//     myFunc();
    // generate console errors
    // this.getErrors();

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      console.log(hash);
      
      switch() {
          case "#aboutme": 
              this.getKnowMore();
          break;
        case "#followme":
          myFunc();
        case "education": 
            this.getEducation();
        default:
          break;
      }
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
      
    } // End if

  });

}

);

function myFunc() {
  b();
}
function b() {
// generate console errors
this.getErrors();
}

errorObj = {};
// window.addEventListener('error', function(e) {
//   console.log("evtObj", e);
// })

window.onerror = function(msg, url, lineNo, columnNo, error) {
  console.log("erroOBj", error);
  errorObj = {
    'msg': msg,
    'url': url,
    'lineNo': lineNo,
    'columnNo': columnNo,
    'Stack Trace: ': error.stack.split("\n")
  };
  console.log("UPDATED SWA", errorObj);
};

// window.onerror = function errorhandler(msg, url, ln, colno, err) {
//   try {
//     var trace = printStackTrace({e: msg});
//     var traceMsg = printStackTrace({e: msg }).join("\n");
//     console.log(traceMsg);
//     console.log(trace);
//   } catch (error) { // do nothing
//     alert("Error:" + msg);
//     return true;
//   }
// }
