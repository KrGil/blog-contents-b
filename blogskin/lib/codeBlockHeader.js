window.onload = function(){
    $(".hljs").parent().each(function () {
        var codeheader = $("<div class='codelang'>");
        var test = $(this).find('code').attr('class').replace('hljs', '').trim();
        var language = '';
        language = language == 'undefined' ? '' : test.substring(9);
        codeheader.html('<span class="language">' + language + '</span>');
        var codeLabel = $('<div class="codeLabel">').append('<div class="code-header"><span class="btn red"></span><span class="yellow btn"></span><span class="green btn"></span></div>').append(codeheader);
        $(this).before(codeLabel);
    })
}