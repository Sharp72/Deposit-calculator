$(function () {
        const datepicker = $('#datepicker').datepicker().data('datepicker');
 
        $('#datepicker--action').on('click', function (e) {
          let { offsetTop, offsetLeft, elementWight, elementHeight } =
            getPosition($(this));
 
          console.log(offsetTop, offsetLeft, elementWight, elementHeight);
 
          datepicker.$el.css({
            top: offsetTop + (offsetTop / 2 - 4),
            left: offsetLeft,
          });
 
          datepicker.show();
        });
 
        function getPosition(e) {
          return {
            offsetTop: e.offset().top,
            offsetLeft: e.offset().left,
            elementWight: e.outerWidth(),
            elementHeight: e.outerHeight(),
          };
        }
      });