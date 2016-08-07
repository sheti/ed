/**
 * Created by Sheti on 07.08.2016
 * Version: 1.0
 */
;(function( $ ) {
    var methods = {
        doAddTag : function( event ) {
            textarea = $(event.data.obj).get(0);
            // Code for IE
            if (document.selection)
            {
                textarea.focus();
                var sel = document.selection.createRange();
                sel.text = event.data.tag1 + sel.text + event.data.tag2;
            }
            // Code for Mozilla Firefox
            else
            {
                var len = textarea.value.length;
                var start = textarea.selectionStart;
                var end = textarea.selectionEnd;

                var scrollTop = textarea.scrollTop;
                var scrollLeft = textarea.scrollLeft;

                var sel = textarea.value.substring(start, end);
                var rep = event.data.tag1 + sel + event.data.tag2;
                textarea.value =  textarea.value.substring(0,start) + rep + textarea.value.substring(end,len);

                textarea.scrollTop = scrollTop;
                textarea.scrollLeft = scrollLeft;
            }
        },
        doImage : function ( event ) {
            textarea = $(event.data.obj).get(0);
            var url = prompt('Enter the Image URL:','http://');
            var scrollTop = textarea.scrollTop;
            var scrollLeft = textarea.scrollLeft;

            if (url != '' && url != null) {

                if (document.selection)
                {
                    textarea.focus();
                    var sel = document.selection.createRange();
                    sel.text = '[img]' + url + '[/img]';
                }
                else
                {
                    var len = textarea.value.length;
                    var start = textarea.selectionStart;
                    var end = textarea.selectionEnd;

                    var sel = textarea.value.substring(start, end);
                    //alert(sel);
                    var rep = '[img]' + url + '[/img]';
                    textarea.value =  textarea.value.substring(0,start) + rep + textarea.value.substring(end,len);


                    textarea.scrollTop = scrollTop;
                    textarea.scrollLeft = scrollLeft;
                }
            }
        },
        doURL : function ( event ) {
            textarea = $(event.data.obj).get(0);
            var url = prompt('Enter the URL:','http://');
            var scrollTop = textarea.scrollTop;
            var scrollLeft = textarea.scrollLeft;

            if (url != '' && url != null) {

                if (document.selection)
                {
                    textarea.focus();
                    var sel = document.selection.createRange();

                    if(sel.text==""){
                        sel.text = '[url]'  + url + '[/url]';
                    } else {
                        sel.text = '[url=' + url + ']' + sel.text + '[/url]';
                    }
                }
                else
                {
                    var len = textarea.value.length;
                    var start = textarea.selectionStart;
                    var end = textarea.selectionEnd;

                    var sel = textarea.value.substring(start, end);

                    if(sel==""){
                        var rep = '[url]' + url + '[/url]';
                    } else
                    {
                        var rep = '[url=' + url + ']' + sel + '[/url]';
                    }

                    textarea.value =  textarea.value.substring(0,start) + rep + textarea.value.substring(end,len);

                    textarea.scrollTop = scrollTop;
                    textarea.scrollLeft = scrollLeft;
                }
            }
        },
        doList : function ( event ) {
            textarea = $(event.data.obj).get(0);
            // Code for IE
            if (document.selection)
            {
                textarea.focus();
                var sel = document.selection.createRange();
                var list = sel.text.split('\n');

                for(i=0;i<list.length;i++)
                {
                    list[i] = '[*]' + list[i];
                }
                sel.text = event.data.tag1 + '\n' + list.join("\n") + '\n' + event.data.tag2;
            }
            // Code for Firefox
            else
            {

                var len = textarea.value.length;
                var start = textarea.selectionStart;
                var end = textarea.selectionEnd;
                var i;

                var scrollTop = textarea.scrollTop;
                var scrollLeft = textarea.scrollLeft;

                var sel = textarea.value.substring(start, end);

                var list = sel.split('\n');

                for(i=0;i<list.length;i++)
                {
                    list[i] = '[*]' + list[i];
                }

                var rep = event.data.tag1 + '\n' + list.join("\n") + '\n' + event.data.tag2;
                textarea.value =  textarea.value.substring(0,start) + rep + textarea.value.substring(end,len);

                textarea.scrollTop = scrollTop;
                textarea.scrollLeft = scrollLeft;
            }
        }
    };

    $.fn.ed = function( img, buttons ) {
        this.each(function() {
            var textarea_obj = this;
            var container = $('<div class="toolbar"></div>');
            $.each(buttons, function(i, val) {
                switch (val) {
                    case 'title':
                        var btn_title = $('<img class="toolbar__button" src="' + img + 'h.gif" title="Title">').bind("click", { tag1 : '[h]', tag2 : '[/h]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_title);
                        break;
                    case 'bold':
                        var btn_bold = $('<img class="toolbar__button" src="' + img + 'bold.gif" title="Bold">').bind("click", { tag1 : '[b]', tag2 : '[/b]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_bold);
                        break;
                    case 'italic':
                        var btn_italic = $('<img class="toolbar__button" src="' + img + 'italic.gif" title="Italic">').bind("click", { tag1 : '[i]', tag2 : '[/i]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_italic);
                        break;
                    case 'underline':
                        var btn_underline = $('<img class="toolbar__button" src="' + img + 'underline.gif" title="Underline">').bind("click", { tag1 : '[u]', tag2 : '[/u]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_underline);
                        break;
                    case 'center':
                        var btn_center = $('<img class="toolbar__button" src="' + img + 'center.gif" title="Center">').bind("click", { tag1 : '[c]', tag2 : '[/c]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_center);
                        break;
                    case 'full':
                        var btn_full = $('<img class="toolbar__button" src="' + img + 'full.gif" title="Full">').bind("click", { tag1 : '[f]', tag2 : '[/f]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_full);
                        break;
                    case 'left':
                        var btn_left = $('<img class="toolbar__button" src="' + img + 'left.gif" title="Left">').bind("click", { tag1 : '[l]', tag2 : '[/l]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_left);
                        break;
                    case 'right':
                        var btn_right = $('<img class="toolbar__button" src="' + img + 'right.gif" title="Right">').bind("click", { tag1 : '[r]', tag2 : '[/r]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_right);
                        break;
                    case 'pre':
                        var btn_pre = $('<img class="toolbar__button" src="' + img + 'pre.gif" title="Pre">').bind("click", { tag1 : '[pre]', tag2 : '[/pre]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_pre);
                        break;
                    case 'picture':
                        var btn_picture = $('<img class="toolbar__button" src="' + img + 'picture.gif" title="Img">').bind("click", { tag1 : '[img]', tag2 : '[/img]', obj : textarea_obj }, methods['doAddTag']);
                        $(container).append(btn_picture);
                        break;
                }
            });
            $(textarea_obj).before(container);
        });
    };
})(jQuery);
