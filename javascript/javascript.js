$(document).ready(function(){
   // Loader Jquery
		$(window).on('load', function() {
      $(".pageLoader").fadeOut();

         //add typed.js
    var typed = new Typed('#typed', {
      strings: [
          'Connecting brands with the relevant influencers',
        ],  
      stringsElement: null,
      typeSpeed: 80
    });

    var typeds = new Typed('#typeds', {
      strings: [
          'Connecting brands with the relevant influencers',
        ],  
      stringsElement: null,
      typeSpeed: 80
    });

    var typeds = new Typed('#typeds-mob', {
      strings: [
          'Connecting brands with the relevant influencers',
        ],  
      stringsElement: null,
      typeSpeed: 80
    });
    
    });
    
    var success = $('.modal.fade.show.d-block');
    if(success.length){
      setTimeout(() => {
        success.removeClass('d-block');
      },8000);
      window.history.pushState("", "", '/');
    }

    //Navbar Jquery
    $(".menu-icon").on("click", function(){
      $("nav ul").toggleClass("showing");
    });

    $(window).on("scroll", function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      }
      else{
        $('nav').removeClass('black');
      }
    });

    // Responsive Toggle Menu    
    $('#toggle').click(function(){
      $(this).toggleClass('on');
      $('#resize').toggleClass("active");
    })

    $("#resize li").on("click", function(){
      $("#toggle").removeClass('on');
      $("#resize").removeClass("active");
    });

    //Cover Grid Animation
    let gridDivs = $('.container-1 .gridDiv');
        var imageIndex1 = 0;
        var imageIndex2 = 0;
        var imageIndex3 = 0;
    setInterval(() => {
          var min1 = 0;
          var max1 = 9;
          const randomIndex1 = Math.floor(Math.random()* (max1 - min1) + min1);

          var min2 = 10;
          var max2 = 19;
          const randomIndex2 = Math.floor(Math.random()* (max2 - min2) + min2);

          var min3 = 20;
          var max3 = 42;
          const randomIndex3 = Math.floor(Math.random()* (max3 - min3) + min3);

          $(gridDivs[imageIndex1]).children("div.i-details").css({'height': '0%'});
          $(gridDivs[randomIndex1]).children("div.i-details").css({'height': '100%'});

          $(gridDivs[imageIndex2]).children("div.i-details").css({'height': '0%'});
          $(gridDivs[randomIndex2]).children("div.i-details").css({'height': '100%'});

          $(gridDivs[imageIndex3]).children("div.i-details").css({'height': '0%'});
          $(gridDivs[randomIndex3]).children("div.i-details").css({'height': '100%'});
          
          imageIndex1 = randomIndex1;
          imageIndex2 = randomIndex2;
          imageIndex3 = randomIndex3;
    },3000);


    let gridDivs1 = $('.flex-system .gridDiv');
    var imageIndex4 = 0;
    var imageIndex5 = 0;
    var imageIndex6 = 0;
    setInterval(() => {
      var min4 = 0;
      var max4 = 20;
      const randomIndex4 = Math.floor(Math.random()* (max4 - min4) + min4);

      var min5 = 21;
      var max5 = 42;
      const randomIndex5 = Math.floor(Math.random()* (max5 - min5) + min5);

      var min6 = 43;
      var max6 = 78;
      const randomIndex6 = Math.floor(Math.random()* (max6 - min6) + min6);

      $(gridDivs1[imageIndex4]).children("div.i-details").css({'height': '0%'});
      $(gridDivs1[randomIndex4]).children("div.i-details").css({'height': '100%'});

      $(gridDivs1[imageIndex5]).children("div.i-details").css({'height': '0%'});
      $(gridDivs1[randomIndex5]).children("div.i-details").css({'height': '100%'});

      $(gridDivs1[imageIndex6]).children("div.i-details").css({'height': '0%'});
      $(gridDivs1[randomIndex6]).children("div.i-details").css({'height': '100%'});
      
      imageIndex4 = randomIndex4;
      imageIndex5 = randomIndex5;
      imageIndex6 = randomIndex6;
},3000);

  
    
    // On scroll jquery
    var countDown = false
        $(window).scroll(function() {
             // Tree animation on scroll
            if ($(window).scrollTop() + $(window).height() >= $('.vision').offset().top) {
            $(".center-section").fadeIn(500);
             setTimeout(()=>{
                $('#branch1').css("width", "120px");
             }, 500);
             setTimeout(()=>{
               $('#branch2').css("width", "120px");
             } , 1500);
             setTimeout(()=>{
               $('#branch3').css("width", "120px");
             } , 2500);
             setTimeout(()=>{
               $('#branch4').css("width", "120px");
             } , 3500);
             setTimeout(()=>{
               $('#branch5').css("width", "120px");
             } , 4500);
     
             setTimeout(()=>{
              $('#br-content1').css("display", "block");
            }, 2500);
            setTimeout(()=>{
              $('#br-content2').css("display", "block");
            } , 3500);
            setTimeout(()=>{
              $('#br-content3').css("display", "block");
            } , 4500);
            setTimeout(()=>{
              $('#br-content4').css("display", "block");
            } , 5500);
            setTimeout(()=>{
              $('#br-content5').css("display", "block");
            } , 6500);
            }
            if (($(window).scrollTop() + $(window).height() >= $('.count').offset().top) && !countDown ){
              // Counting Animation for footer
              $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
              });
              countDown = true;
              
            }
        });

        // tree show and hide animation
        $('#br-content1').on('mouseover', function(){
          $('.content-of-vision1').css('display', 'block');
          $('.content-of-vision2').css('display', 'none');
          $('.content-of-vision3').css('display', 'none');
          $('.content-of-vision4').css('display', 'none');
          $('.content-of-vision5').css('display', 'none');
        })
    
        $('#br-content2').on('mouseover', function(){
          $('.content-of-vision2').css('display', 'block');
          $('.content-of-vision1').css('display', 'none');
          $('.content-of-vision3').css('display', 'none');
          $('.content-of-vision4').css('display', 'none');
          $('.content-of-vision5').css('display', 'none');
        })
       
        $('#br-content3').on('mouseover', function(){
          $('.content-of-vision3').css('display', 'block');
          $('.content-of-vision2').css('display', 'none');
          $('.content-of-vision1').css('display', 'none');
          $('.content-of-vision4').css('display', 'none');
          $('.content-of-vision5').css('display', 'none');
        })
            
        $('#br-content4').on('mouseover', function(){
          $('.content-of-vision4').css('display', 'block');
          $('.content-of-vision2').css('display', 'none');
          $('.content-of-vision3').css('display', 'none');
          $('.content-of-vision1').css('display', 'none');
          $('.content-of-vision5').css('display', 'none');
        })
            
        $('#br-content5').on('mouseover', function(){
          $('.content-of-vision5').css('display', 'block');
          $('.content-of-vision2').css('display', 'none');
          $('.content-of-vision3').css('display', 'none');
          $('.content-of-vision4').css('display', 'none');
          $('.content-of-vision1').css('display', 'none');
        })

        //Slick Slider for footer
        $('.carousels').slick({
          slidesToShow: 3,
          dots: true,
          autoplay:true,
          infinite:true,
          centerPadding: '60px',
          centerMode: true,
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
          });

          //slick slider for mobile view
          $('.card-slider').slick({
            slidesToShow: 3,
            dots: true,
            autoplay:true,
            infinite:true,
            centerPadding: '0px',
            centerMode: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1
                }
              }
            ]
            });

            $('.network-slider').slick({
              slidesToShow: 3,
              dots: true,
              autoplay:true,
              infinite:true,
              centerPadding: '0px',
              centerMode: true,
              prevArrow: null,
              nextArrow: null,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                  }
                }
              ]
              });

            

         //forms select jquery for brand & influncer
         $('.clickIn').click(function(){
          $('#influncerCheck').attr('checked', 'checked');
          $('.forInfluncer').css('display', 'block');
          $('.forBrand').css('display', 'none');
        })
        
        $('.clickBr').click(function(){
          $('#brandCheck').attr('checked', 'checked');
          $('.forInfluncer').css('display', 'none');
          $('.forBrand').css('display', 'block');
        }) 
        
        $('#influncerCheck').click(function(){
          if($(this).prop("checked") == true){
              $('.forBrand').hide('1');
              $('.forBrand').css('display', 'none');
              $('.forInfluncer').show('1');
          }
        });
    
        $('#brandCheck').click(function(){
          if($(this).prop("checked") == true){
            $('.forInfluncer').hide('1');
            $('.forInfluncer').css('display', 'none');
            $('.forBrand').show('1');
          }
        });

        $('#Facebook').click(function(){
          if($(this).prop("checked") == true){
            $('#url1').show('1');
          }
          else{
            $('#url1').hide('1');
            $('#url1-error').hide('1');
          }
        });

        $('#Instagram').click(function(){
          if($(this).prop("checked") == true){
            $('#url2').show('1');
          }
          else{
            $('#url2').hide('1');
            $('#url2-error').hide('1');
          }
        });

        $('#YouTube').click(function(){
          if($(this).prop("checked") == true){
            $('#url3').show('1');
          }
          else{
            $('#url3').hide('1');
            $('#url3-error').hide('1');
          }
        });

        $('#TikTok').click(function(){
          if($(this).prop("checked") == true){
            $('#url4').show('1');
          }
          else{
            $('#url4').hide('1');
            $('#url4-error').hide('1');
          }
        });

        $('#Twitter').click(function(){
          if($(this).prop("checked") == true){
            $('#url5').show('1');
          }
          else{
            $('#url5').hide('1');
            $('#url5-error').hide('1');
          }
        });

        $('#LinkedIn').click(function(){
          if($(this).prop("checked") == true){
            $('#url6').show('1');
          }
          else{
            $('#url6').hide('1');
            $('#url6-error').hide('1');
          }
        });

        
        $('.form-check-input').click(function(){
          if($(this).prop("checked") == true){
            $('#urlLabel').show('1');
          }
        });

        //validation Function
        $(function() {
          $("form[name='registration1']").validate({
            onkeyup:function(element) {
                           
              $(element).valid();
            },
            rules: {
              email: {
                required: true,
                email: true
              },
              mobile: {
                required: true,
                minlength: 8,
                maxlength: 10
              },
              fname: {
                required: true,
                minlength: 2
              }
            },
            messages: {
              fname: "Enter a valid name",
              mobile: "Enter a valid mobile no.",
              email: "Enter a valid email address"
            },
            errorPlacement: function(error, element) {
              if (element.attr("name") == "fname" )
                   error.insertAfter(".contact-valid1");
              else if (element.attr("name") == "email" )
                  error.insertAfter(".contact-valid2");
              else if  (element.attr("name") == "mobile" )
                  error.insertAfter(".contact-valid3");       
              else
                  error.insertAfter(element);       
          },
          submitHandler: function(form) {
            form.submit();
            $('#exampleModal').modal('hide');
          }
        
          });
        });

        $(function() {
          $("form[name='registration']").validate({
            onkeyup:function(element) {
                           
              $(element).valid();
            },
            rules: {
              email: {
                required: true,
                email: true
              },
              mobile: {
                required: true,
                minlength: 8,
                maxlength: 10
              },
              fname: {
                required: true,
                minlength: 2
              },
              handle: {
                required: true
              },
              companyname: {
                required: true,
                minlength: 4
              }
            },
            messages: {
              fname: "Enter valid name",
              mobile: "Enter valid mobile no.",
              email: "Enter valid email address",
              handle: "Select minimum one platform",
              companyname: "Enter valid company name"
            },
            errorPlacement: function(error, element) {
              if (element.attr("name") == "fname" )
                   error.insertAfter(".errorTxt1");
              else if (element.attr("name") == "email" )
                  error.insertAfter(".errorTxt2");
              else if  (element.attr("name") == "mobile" )
                  error.insertAfter(".errorTxt3");
              else if (element.attr("name") == "handle" )
                  error.insertAfter(".errorTxt4");
              else if (element.attr("name") == "companyname" )
                  error.insertAfter(".errorTxt5");                     
              else
                  error.insertAfter(element);
          },
          submitHandler: function(form) {
            form.submit();
            $('#exampleModal').modal('hide');
          }
        
          });
        });

        //modal reset jquery after modal close
        $('#exampleModal').on('hidden.bs.modal', function () {
          $(this).find('form').trigger('reset');
          $('#url1').css('display', 'none');
          $('#url2').css('display', 'none');
          $('#url3').css('display', 'none');
          $('#url4').css('display', 'none');
          $('#url5').css('display', 'none');
          $('#url6').css('display', 'none');
        })   
        
        $('.gridDiv').on('click', function(){
          var test = $(this).children('img').attr('src');
          if(test){
            var src = test.split('/'); 
            var file = src[src.length-1]; 
            var dataSrc = file.split('.')[0];
            $('.appendName').val(dataSrc);
          }
          else{
            $('.appendName').val('Video');
          }
        })

        var dt = new Date();
        var appendYear = dt.getFullYear();
        $('#years').text(appendYear);
});    
    
    
    
    

    
    
    
    
    
    
    
    

     
    
        
        
    

    

    

    

    


        


        





       


    


  
    
    
    

    

    


    







