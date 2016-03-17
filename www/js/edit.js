$(document).ready(function(){
            var id = decodeURI(parseInt(getUrlVars()["id"]));
            var title = decodeURI(getUrlVars()["title"]);
            var desc = decodeURI(getUrlVars()["desc"]);
            $("#id").text(id);
            $("#title").val(title);
            $("#desc").val(desc);

        });