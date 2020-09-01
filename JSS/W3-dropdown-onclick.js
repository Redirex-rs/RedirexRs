$(function(){
        // Show hide popover
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });
    });
$('.dropdown').click(function() {
    $(this).toggleClass('clicked');
});
    $(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if (!$(event.target).closest('.dropdown').length){
            $(".dropdown-menu").slideUp("fast");
        }            
    });
