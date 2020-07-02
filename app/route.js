var app = angular.module("sample", ["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider
    .when("/course", {
        templateUrl : "templates/post.html"
    })
    .when("/department", {
        templateUrl : "templates/view.html"
    });
});
