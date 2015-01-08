$(document).ready(function() {
    
    $('ul.navbar-nav li').click(function(e) {
        $('ul.navbar-nav li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });
});
