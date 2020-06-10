$(function () {
    let header = $('#header')
    let intro = $('#intro')

    let headerH = header.innerHeight()
    let introH = intro.innerHeight()

    let indentAbsoluteTop = 30


    $(window).scroll(function () { 
        let scrollPos = $(this).scrollTop()
        
        if ((scrollPos) >= (headerH + indentAbsoluteTop)) {
            header.addClass('fixed')
        }
        else
            header.removeClass('fixed');
        
        
        if (scrollPos >= (introH) - headerH) {
            header.addClass('show')
        }
        else
            header.removeClass('show')
    })
})
$(function () {

    let filters = $('[data-filter]')

    filters.click(function (e) { 
        e.preventDefault()
        
        let filter = $(this).data('filter')

        //Current filter

        $(filters).each(function () {
            let  filterArray= $(this).data('filter')

            if (filter == filterArray) {
                $(this).addClass('current')
            }
            else
                $(this).removeClass('current')
            
        })

        //Categories

        if (filter == 'all') {
            $('[data-category]').removeClass('hide')
        }
        else {
            $('[data-category]').each(function () {
                let categoriesArray = $(this).data('category')
                
                if (filter != categoriesArray) {
                    $(this).addClass('hide')
                }
                else
                    $(this).removeClass('hide')            
            })
        }
    })
})
$(function () {
    
    let scroll = $('[data-scroll]')
    let headerH = 90

    scroll.click(function (e) { 
        e.preventDefault()
        
        let elementId = $(this).data('scroll')
        let elementOffset = $(elementId).offset().top

        $('html, body').animate({
            scrollTop: elementOffset - --headerH
        })
    })
})
