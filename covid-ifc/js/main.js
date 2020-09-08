function urlCampus(){
    var results = new RegExp('[\?&]' + "campus" + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}
$( document ).ready(function() {
    if (campus = urlCampus())
        $('#idCampus').text("- Campus " + campus);
    else
        $('#idCampus').text("- Reitoria");
});
