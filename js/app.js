(function(){
    var app = angular.module("store", []);
    app.controller("storecontroller", function(){
        this.product = gem;
    });

    var gem = {
        name: "Dodecahedro",
        price: 2.95,
        description: "In geometry, a dodecahedron is any polyhedron with twelve flat faces. The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid"
    }

})()

