var app = angular.module("sample", ["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider
    .when("/post", {
        templateUrl : "templates/post.html"
    })
    .when("/view", {
        templateUrl : "templates/view.html"
    });
});
