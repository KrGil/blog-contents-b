document.addEventListener("DOMContentLoaded", function(){
    $(".hljs").parent().each(function () {
        var codeHeaderContents = $("<div class='r-code-header'>");
        var rawLang = $(this).find('code').attr('class').replace('hljs', '').trim();
        var language = rawLang.substring(9);
        language = language == 'undefined' ? '' : rawLang.substring(9);
        codeHeaderContents.html('<span class="language">' + language + '</span>');
        var codeHeader = $('<div class="code-header">').append('<div class="l-code-header"><span class="btn red"></span><span class="yellow btn"></span><span class="green btn"></span></div>').append(codeHeaderContents);
        $(this).before(codeHeader);
    })  
})