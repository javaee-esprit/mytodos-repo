/**
 * Created by ego on 19/04/15.
 */
angular.module('mytodoApp').value('locationParser', function(responseHeaders){
    // Get the Location header and parse it.
    var locationHeader = responseHeaders('Location');
    var fragments = locationHeader.split('/');
    var id = fragments[fragments.length -1];
    return id;
});