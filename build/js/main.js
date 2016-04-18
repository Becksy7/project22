$(function() {

    var App = (function(){

        return {
            init : function() {
                DummyModule.init();
                /*Ya.share2(document.getElementById('my-share'), {
                    content:  {
                        sharing: {
                            title: 'Заголовок для шэринга',
                            url: 'http://someurl.ru/',
                            description: 'Описание для шэринга',
                            image: 'images/john_snow.jpg'
                        }
                    }
                });*/

                $('[js-validate]').validate({
                    errorPlacement: function(){
                        //empty to prevent displaying error
                    },
                    highlight: function(element, errorClass, validClass) {
                        $(element.form).find('[type=submit]').attr('disabled',true);
                    },
                    unhighlight: function(element, errorClass, validClass) {
                        $(element.form).find('[type=submit]').removeAttr('disabled');
                    }
                });
                $('[js-validate]').find('input[type=radio]').on('change',function(){
                    if ($(this).is(':checked')){
                        $(this).parents('form').find('[type=submit]').removeAttr('disabled');
                    }
                });
            }
        }
    })()

    /**
     * Dummy Module Example
     */
    ,DummyModule = (function(){
        return {
            init : function() {
                // do something
            }
        }
    })()

    ;App.init();

});
