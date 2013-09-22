
	  
$(document).ready(function(){
	
	 $('#home').css({'opacity': '1'})

	$('.home').click(
	  function(){
    	 $('#home').css({'opacity': '1','visibility':'visible'})
		  $('#gallery').css({'opacity': '0','visibility':'hidden'})
		   $('#contact').css({'opacity': '0','visibility':'hidden'})
		   $('#col1').css({'opacity': '0','visibility':'hidden'})
		   
		   
		   

	  }
	)
		$('.gallery').click(
	  function(){
    	 $('#home').css({'opacity': '0','visibility':'hidden'})
		  $('#gallery').css({'opacity': '1','visibility':'visible'})
		   $('#contact').css({'opacity': '0','visibility':'hidden'})
		   $('#col1').css({'opacity': '0','visibility':'hidden'})

	  }
	)
		$('.contact').click(
	  function(){
    	 $('#home').css({'opacity': '0','visibility':'hidden'})
		  $('#gallery').css({'opacity': '0','visibility':'hidden'})
		   $('#contact').css({'opacity': '1','visibility':'visible'})
	  		   $('#col1').css({'opacity': '1','visibility':'visible'})

	  }
	)
	
	 $('.Contact').hover(
    function(){
    
$('#line2').css({'width': '100px',
'transition': 'linear .2s',
'margin': '0 0 0 90px',
	"height": "1px",
		"text-shadow":"0 0 1px #09f "


});

    },
    function(){
     $('#line2').css({'width': '800px',
'transition': 'linear .2s',
'margin': '0 0 0 -400px',
	"height": "3px"

});


    }
  );    
	$('.home').hover(
    function(){
    
$('#line2').css({'width': '100px',
'transition': 'linear .2s',
'margin': '0 0 0 -190px',
	"height": "1px",
		"text-shadow":"0 0 1px #09f "


});

    },
    function(){
     $('#line2').css({'width': '800px',
'transition': 'linear .2s',
'margin': '0 0 0 -400px',
	"height": "3px"

});


    }
  );    
  $('.gallery').hover(
    function(){
    
$('#line2').css({'width': '100px',
'transition': 'linear .2s',
'margin': '0 0 0 -50px',
	"height": "1px",
		"text-shadow":"0 0 1px #09f "


});

    },
    function(){
     $('#line2').css({'width': '800px',
'transition': 'linear .2s',
'margin': '0 0 0 -400px',
	"height": "3px"

});


    }
  );    
});
