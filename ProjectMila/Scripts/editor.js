$( "#information" ).click(function() {
    $(".templates-options").hide();
    $(".information-options").fadeIn(700);
    $(".qr-code-options").hide();
   $(".color-options").hide();
   $(".font-options").fadeIn(700);

       
  });

  $( "#templates" ).click(function() {
    $(".information-options").hide();
    $(".templates-options").fadeIn(700);
    $(".qr-code-options").hide();
    
  });

  $( "#code-qr" ).click(function() {
    $(".information-options").hide();
    $(".templates-options").hide();
    $(".qr-code-options").fadeIn(700);

    
  });
  $( ".menu" ).click(function() {
    $(".text-Options").hide();
  });
   
 $(".text-Options").hide();
 $( "#textarea-div" ).click(function() {
    $(".text-Options").fadeIn(700);
  });


  $( ".choose-font" ).click(function() {
    $(".templates-options").hide();
    $(".information-options").fadeIn(700);
    $(".font-options").fadeIn(700);
   $(".color-options").hide();

   });


   $( ".fa-fill-drip" ).click(function() {
    $(".templates-options").hide();
    $(".information-options").fadeIn(700);
    $(".font-options").hide();
   $(".color-options").fadeIn(700);
    
   });

//    ===============================  font style  ============================

    $( ".fa-bold" ).click(function() {
     $("#textarea").css("font-weight" , "bold");
    });

   $( ".fa-italic" ).click(function() {
    $("#textarea").css("font-style" , "italic");
   });

   $( ".fa-underline" ).click(function() {
    $("#textarea").css("text-decoration" , "underline");
   });

//    ================================ fonts  ==================================

$( "#monospace" ).click(function() {
    $("#textarea").css("font-family" , "monospace");
   });

   $( "#arial" ).click(function() {
    $("#textarea").css("font-family" , "arial");
   });

   $( "#georgia" ).click(function() {
    $("#textarea").css("font-family" , "georgia");
   });

   $( "#fantasy" ).click(function() {
    $("#textarea").css("font-family" , "fantasy");
   });

   $( "#cursive" ).click(function() {
    $("#textarea").css("font-family" , "cursive");
   });

   $( "#calibri" ).click(function() {
    $("#textarea").css("font-family" , "calibri");
   });

   $( "#tahoma" ).click(function() {
    $("#textarea").css("font-family" , "tahoma");
   });

   $( "#impact" ).click(function() {
    $("#textarea").css("font-family" , "impact");
   });

   $( "#trebuchet" ).click(function() {
    $("#textarea").css("font-family" , "Trebuchet MS");
   });

                //    =====================  colors   ====================

     $( ".one" ).click(function() {
        $("#textarea").css("color" , "black");
     });
     
     $( ".two" ).click(function() {
        $("#textarea").css("color" , "rgb(49, 47, 47)");
     });

     $( ".three" ).click(function() {
        $("#textarea").css("color" , "rgb(114, 114, 114)");
     });

     $( ".four" ).click(function() {
        $("#textarea").css("color" , "rgb(172, 172, 172)");
     });

     $( ".five" ).click(function() {
        $("#textarea").css("color" , "white");
     });

     $( ".six" ).click(function() {
        $("#textarea").css("color" , "rgb(112, 2, 2)");
     });

     $( ".seven" ).click(function() {
        $("#textarea").css("color" , "rgb(253, 78, 78)");
     });

     $( ".eight" ).click(function() {
        $("#textarea").css("color" , "pink");
     });

     $( ".nine" ).click(function() {
        $("#textarea").css("color" , "palevioletred");
     });

     $( ".ten" ).click(function() {
        $("#textarea").css("color" , "violet");
     });

     $( ".eleven" ).click(function() {
        $("#textarea").css("color" , "blueviolet");
     });
     $( ".twelve" ).click(function() {
        $("#textarea").css("color" , "rgb(0, 102, 92)");
     });
     $( ".thirteen" ).click(function() {
        $("#textarea").css("color" , "rgb(12, 158, 143)");
     });
     $( ".fourteen" ).click(function() {
        $("#textarea").css("color" , "turquoise");
     });
     $( ".fifteen" ).click(function() {
        $("#textarea").css("color" , "rgb(65, 146, 221)");
     });
     $( ".sixteen" ).click(function() {
        $("#textarea").css("color" , "rgb(8, 83, 196)");
     });
     $( ".seventeen" ).click(function() {
        $("#textarea").css("color" , "rgb(0, 0, 170)");
     });
     $( ".eighteen" ).click(function() {
        $("#textarea").css("color" , "rgb(1, 59, 1)");
     });
     $( ".ninteen" ).click(function() {
        $("#textarea").css("color" , "green");
     });
     $( ".twenty" ).click(function() {
        $("#textarea").css("color" , "rgb(70, 156, 70)");
     });
     $( ".t-one" ).click(function() {
        $("#textarea").css("color" , "rgb(96, 129, 46) ");
     });
     $( ".t-two" ).click(function() {
        $("#textarea").css("color" , "yellow");
     });
     $( ".t-three" ).click(function() {
        $("#textarea").css("color" , "orange");
     });
     $( ".t-four" ).click(function() {
        $("#textarea").css("color" , "red");
     });


   //   =============== uppercase ===================
   $( ".fa-font-case" ).click(function() {
      $("#textarea").css("text-transform" , "uppercase");
   });



//   ======================   show templates    ===================


   $(document).ready(function(){
      $("#templates-select").on('change', function(){
          $(".t").hide();
         $("." + $(this).val()).fadeIn(700);
      }).change();
      
   });



// =================================    font size     ======================================

function increaseFontSizeBy100px() {
    document.getElementById('texarea').style.fontSize = "100px";
}

 function decreaseFontSizeBy100px() {
     document.getElementById('textarea').style.fontSize = "50px";
 }


// ==============  change templates  =======


//new code.

    $( "#imagesButton1" ).click(function() {
   var img = document.createElement("img");
   var src = document.getElementById("create");
      img.src = "../Images/template1.png"; 
 src.appendChild(img);

    });
   
    $( "#imagesButton2" ).click(function() {
      var img = document.createElement("img");
      var src = document.getElementById("create");
         img.src = "../Images/template2.png"; 
    src.appendChild(img);
   
       });
   
       
       $( "#imagesButton3" ).click(function() {
         var img = document.createElement("img");
         var src = document.getElementById("create");
            img.src = "../Images/template3.png"; 
       src.appendChild(img);
      
          });
   
          
          $( "#imagesButton4" ).click(function() {
            var img = document.createElement("img");
            var src = document.getElementById("create");
               img.src = "../Images/template4.png"; 
          src.appendChild(img);
         
             });
   
             
             $( "#imagesButton5" ).click(function() {
               var img = document.createElement("img");
               var src = document.getElementById("create");
                  img.src = "../Images/template5.png"; 
             src.appendChild(img);
            
                });
   
                
                $( "#imagesButton6" ).click(function() {
                  var img = document.createElement("img");
                  var src = document.getElementById("create");
                     img.src = "../Images/template6.png"; 
                src.appendChild(img);
               
                   });
                  
 
  