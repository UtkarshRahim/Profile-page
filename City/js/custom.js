// fix header
$(window).scroll(function () {
    var sticky = $('#deskTopNav');
    var logo = $('#deskTopLogo')
    scroll = $(window).scrollTop();

    if (scroll >= 100) {
        sticky.addClass('fixed-header  animated animatedFadeInUp fadeInUp');
        logo.addClass('fix-logo');
    }
    else {
        sticky.removeClass('fixed-header animated animatedFadeInUp fadeInUp');
        logo.removeClass('fix-logo');
    }
});




// News carousal
$(document).ready(function () {
    var owl = $('#latestNews').owlCarousel({
        margin: 10,
        loop: true,
        // autoWidth: true,
        nav: true,
        // dots: true,
        navText: ["<img src='img/left.svg'>","<img src='img/right.svg'>" ],
        responsiveClass: true,
        //mergeFit: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
    var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    var mokData = [
        { category: "Material", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'Nov 7, 2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'Nov 7, 2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'Nov 7, 2018', name: lorem, image: 'img/1.jpg' },
        { category: "Material", date: 'Nov 7, 2018', name: lorem, image: 'img/1.jpg' },
        { category: "Material", date: '2', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'Nov 7, 2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'Nov 7, 2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },
        { category: "Tool", date: 'sept 5,2018', name: lorem, image: 'img/1.jpg' },

    ];
    $.each(mokData, function (i) {
        var templateString = `
        <div class="item">
            <div class="card latest-news">
              <img class="card-img-top" src= ${mokData[i].image}>
              <div class="card-body">
                <p class="font-weight-bold text-md">${mokData[i].name}</p>
                <p class="font-weight-bold text-md text-secondary text-capitalize">${mokData[i].date}</p>
              </div>
             </div>
        </div>`;
        owl.trigger('add.owl.carousel', [$(templateString)]);
        owl.trigger('refresh.owl.carousel');
    })
});

// gallery carousel
$(document).ready(function () {
    var owl = $("#gallery").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade",
        nav:true,
        navText: ["<img src='img/transparent-left.svg'>", "<img src='img/transparent-right.svg'>"],
        dots:false,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });
    var caption = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  
    var gallryImages = [{
        image: "img/gallery1.jpg",
        caption: caption
    }, {
        image: "img/gallery2.jpg",
        caption: caption
    },
    {
        image: "img/gallery3.jpg",
        caption: caption
    },
    {
        image: "img/banner.png",
        caption: caption
    }
    ]
    $.each(gallryImages, function (i) {
        var templateString = `
        <div class="item">
        <div class="card">
            <div class="overlay">
                <div class="container">
                    <div class="caption text-white">${gallryImages[i].caption}</div>
                </div>
            </div>
            <img class="card-img-top" src= ${gallryImages[i].image}>
        </div>
        </div>
        `;
        owl.trigger('add.owl.carousel', [$(templateString)]);
        owl.trigger('refresh.owl.carousel');
    })

});



// Menu button
$(document).ready(function () {
    $("#mobNavBtn").click(function () {
        $(".mob-nav").fadeIn('2000');
    })
});
$(document).ready(function () {
    $("#hideNav").click(function () {
        $(".mob-nav").fadeOut('2000');
    })
});

$(function(){
    $("#twitter").load("twitter.html"); 
  });

  $(function(){
    $("#instagram").load("instagram.html"); 
  });

  $(function(){
    $("#facebook").load("fb.html"); 
  });

  $(function(){
    $("#fb_events").load("fb_events.html"); 
  });


