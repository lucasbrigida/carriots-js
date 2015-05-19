var Carriots = (function() {
    var self = this;
    var defaultOptions = {
      apiUrl: 'http://api.carriots.com/'
    };

    function config(options) {
      self.options = options;

      if(!options['apiKey']) {
        throw new Error('apiKey is not defined in config');
      }

      //Set default headers
      defaultOptions.headers = {
        'carriots.apiKey': self.options.apiKey,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
    }

/**********************
 *
 *  Device Management
 *
 **********************/

    function groups () {
      function create (options) {
        return jQuery.ajax({
          method: 'POST',
          url: defaultOptions.apiUrl+'groups/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function show (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'groups/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list (options) {
        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'groups/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function update (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'PUT',
          url: defaultOptions.apiUrl+'groups/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function remove (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'DELETE',
          url: defaultOptions.apiUrl+'groups/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function assets () {
        function show (groupId, assetId) {
          if(!groupId) throw new Error('Group ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'groups/'+groupId+'/assets/'+assetId+'/',
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        function list (developerId) {
          if(!developerId) throw new Error('Developer ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'groups/'+developerId+'/assets/',
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        return {
          show: show,
          list: list
        };
      }

      function devices () {
        function show (groupId, deviceId) {
          if(!groupId) throw new Error('Group ID is not defined');
          if(!deviceId) throw new Error('Device ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'groups/'+groupId+'/devices/'+deviceId+'/',
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        function list (developerId) {
          if(!developerId) throw new Error('Developer ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'groups/'+developerId+'/devices/',
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }
      
        return {
          show: show,
          list: list
        };
      }
    }


    function assets () {
      function create (options) {
        return jQuery.ajax({
          method: 'POST',
          url: defaultOptions.apiUrl+'assets/',
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function show (developerId) {
        if(!developerId) throw new Error('Developer ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'assets/'+developerId+'/',
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list (options) {
        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'assets/',
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function update (developerId, options) {
        if(!developerId) throw new Error('Developer ID is not defined');

        return jQuery.ajax({
          method: 'PUT',
          url: defaultOptions.apiUrl+'assets/'+developerId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function remove (developerId, options) {
        if(!developerId) throw new Error('Developer ID is not defined');

        return jQuery.ajax({
          method: 'DELETE',
          url: defaultOptions.apiUrl+'assets/'+developerId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function devices () {
        function show (assetId, deviceId, options) {
          if(!assetId) throw new Error('Asset ID is not defined');
          if(!deviceId) throw new Error('Device ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'assets/'+assetId+'/devices/'+deviceId+'/',
            data: options,
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        function list (developerId, options) {
          if(!developerId) throw new Error('Developer ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'assets/'+developerId+'/devices/',
            data: options,
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        return {
          show: show,
          list: list
        };
      }
    }


    function devices () {
      function create (options) {
        return jQuery.ajax({
          method: 'POST',
          url: defaultOptions.apiUrl+'devices/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function show (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'devices/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list (options) {
        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'devices/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function update (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'PUT',
          url: defaultOptions.apiUrl+'devices/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function remove (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'DELETE',
          url: defaultOptions.apiUrl+'devices/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function config () {
        function create (deviceId, options) {
          if(!deviceId) throw new Error('Device ID is not defined');

          return jQuery.ajax({
            method: 'POST',
            url: defaultOptions.apiUrl+'devices/'+deviceId+'/deviceconfigs/',
            data: options,
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        function list (deviceId, options) {
          if(!deviceId) throw new Error('Device ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'devices/'+deviceId+'/deviceconfigs/',
            data: options,
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        function download (deviceId, fileName, fileVersion) {
          if(!deviceId) throw new Error('Device ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'devices/'+deviceId+'/deviceconfigs/'+fileName+'/'fileVersion+'/',
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }
      }


      function streams (deviceId) {
        function list (deviceId, options) {
          if(!deviceId) throw new Error('Device ID is not defined');

          return jQuery.ajax({
            method: 'GET',
            url: defaultOptions.apiUrl+'devices/'+deviceId+'/streams/',
            data: options,
            crossDomain: true,
            headers: defaultOptions.headers
          });
        }

        function remove (deviceId, options) {
          if(!deviceId) throw new Error('Device ID is not defined');

          return jQuery.ajax({
            method: 'DELETE',
            url: defaultOptions.apiUrl+'devices/'+deviceId+'/streams/',
            data: options,
            crossDomain: true,
            headers: defaultOptions.headers
          });        
        }

        return {
          list: list,
          remove: remove
        };
      }

      return {
        create: create,
        show: show,
        list: list,
        update: update,
        remove: remove,
        config: config,
        streams: streams
      };
    }


    function models () {
      function create (options) {
        return jQuery.ajax({
          method: 'POST',
          url: defaultOptions.apiUrl+'models/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function show (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'models/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list (options) {
       return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl+'models/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        }); 
      }

      function update (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'PUT',
          url: defaultOptions.apiUrl+'models/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function remove (deviceId, options) {
        if(!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'DELETE',
          url: defaultOptions.apiUrl+'models/'+deviceId+'/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      return {
        create: create,
        show: show,
        list: list,
        update: update,
        remove: remove
      };
    }

/**********************
 *
 *  Data Management
 *
 **********************/
    function data () {
      function create () {
        
      }
      
      function show () {
        
      }

      function list () {
        
      }

      function remove () {
        
      }
    }


    function streams () {
      function create () {
        
      }
      
      function show () {
        
      }

      function list () {
        
      }

      function remove () {
        
      }
    }


    function triggers () {
      function create () {
        
      }
      
      function show () {
        
      }

      function list () {
        
      }

      function update () {

      }

      function remove () {
        
      }
    }


/**********************
 *
 *  Rules Management
 *
 **********************/
    function rules () {
      function create () {
        
      }
      
      function show () {
        
      }

      function list () {
        
      }

      function update () {

      }

      function remove () {
        
      }
    }


    function listeners () {
      function create () {
        
      }
      
      function show () {
        
      }

      function list () {
        
      }

      function update () {

      }

      function remove () {
        
      }
    }

    return {
      config: config,
      groups: groups,
      assets: assets,
      devices: devices,
      models: models,

      data: data,
      streams: streams,
      triggers: triggers,

      rules: rules,
      listeners: listeners
    };
}());
