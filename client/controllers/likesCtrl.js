app.controller("Likes",[
  "$scope",
  "$rootScope",
  "$timeout",
  "APIFactory",
  "CostumeFactory",
  "$uibModal",
  "$location", 
  function($scope, $rootScope, $timeout, APIFactory, CostumeFactory, $uibModal, $location) {
    const likes = this;
    likes.title="likes page";

    likes.boodCostumes = [];
    
    $scope.$on("user", function(event, data) {
      $timeout().then(()=> {
        // Save User data.
        likes.user = data;
        $timeout(); 
        return data;
      }).then(() => {
        // Get all the boos owned by the user.
        return APIFactory.getUserBoos(likes.user.id);
      }).then((boos) => {
        // Saving the boos so they can be deleted.
        likes.boos = boos;
        const booPromises = boos.map((boo) => {
          // Get the costume object for each Boo. 
          return APIFactory.getSomething(boo.costume).then((res) => {
            likes.boodCostumes.push(res);
            $timeout();
          }, e=> console.error);
        });
      }, e=> console.error);
    });

    likes.unBoo = (boo) => {
      // remove the boo object from the list of boos.
      likes.boos.splice(likes.boos.indexOf(boo), 1);
      // Delete boo via its url property.
      APIFactory.deleteSomething(boo.url); 
    };

    $rootScope.$on("unboo", (event, data)=> {
      // Remove the costume's associated boo from list of boos, if it has been unbood in the detail modal.
      likes.boos.forEach((boo)=> {
        if(boo.costume===data.url) {
          likes.boos.splice(likes.boos.indexOf(boo), 1);
          $timeout();
        }
      });
    });

    likes.openModal = (costume) => {
    // Opens costume detail modal.
    // Sends the entire object of the costume clicked, 
    // And the user info.      
      const modalInstance = $uibModal.open({
        size: "lg",
        templateUrl: "/partials/detail.html", 
        controller: "Detail",
        controllerAs: "detail", 
        resolve: {
          "costume": costume, 
          "user": likes.user
        }
      });
    };

    likes.copyToCloset = (costume) => {
      // Edit existing costume object 
      delete costume["url"];
      delete costume["id"];
      costume.owner = likes.userInfo.url;
      costume.public = false;
      // Create a new costume using most of existing info.
      CostumeFactory.copyCostume(costume)
      .then(() => {
        // Redirect to costume closet page.
        $location.path("/closet");
      }, e=>console.error);
    };

  }]);

