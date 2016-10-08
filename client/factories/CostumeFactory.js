app.factory( "CostumeFactory", [ 
  "$http", 
  "apiUrl",
  "APIFactory", 
  function($http, apiUrl, APIFactory) {

    const errorHandle = (e) => {console.log(e);};


    return {

      getPublicCostumes: () => {
        // Gets all public costumes for feed.
        // Arguments: none
        return APIFactory.getApiRoot()
        .then((root) => {
          return $http.get(`${root.costumes}?public=true`);
        }, errorHandle)
        .then((res) => {
          return res.data;
        }, errorHandle);
      }, 

      getUserCostumes: (userid) => {
        // Get all costumes owned by a given user. 
        // Argument: user id
        return APIFactory.getApiRoot()
        .then((root) => {
          return $http.get(`${root.costumes}?owner=${userid}`);
        }, errorHandle)
        .then((res) => {
          return res.data[0];
        });
      }

    };
  }]);


      // //// COSTUMES ////

      // getOneCostume: (id) => {
      //   // Gets one costume for editing.
      //   return getApiRoot()
      //   .then((root) => {
      //     return $http.get(`${root.costumes}?costumeid=${id}`);
      //   }, errorHandle)
      //   .then((res)=> {
      //     return res.data[0];
      //   }, errorHandle);
      // },
      // createCostume: (data) => {
      //   return getApiRoot()
      //   .then((root) => {
      //     return $http.post(`${root.costumes}`, data);
      //   }, errorHandle)
      //   .then(()=> true, errorHandle);
      // },
      // updateCostume: (data) => {
      //   return $http.put(`${data.url}`, data)
      //   .then((res) => {
      //     return res.data;
      //   }, errorHandle);
      // }, 
