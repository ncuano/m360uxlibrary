$(document)
  .ready(function() {

    $('.left.sidebar').first()
      .sidebar('attach events', '.toggle.button')
    ;
    
    $('.toggle.button')
      .removeClass('disabled')
    ;

    $('.ui.sticky')
      .sticky({
        context: '#main-content',
        pushing: true
      })
    ;

    $('.ui.sticky')
      .sticky('refresh')
    ;

  })
;