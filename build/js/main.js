$(function() {

    var App = (function(){

        return {
            init : function() {
                DummyModule.init();
                Ya.share2(document.getElementById('my-share'), {
                    content:  {
                        sharing: {
                            title: 'Заголовок для шэринга',
                            url: 'http://someurl.ru/',
                            description: 'Описание для шэринга',
                            image: 'images/john_snow.jpg'
                        }
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
