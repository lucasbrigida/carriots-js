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
    }

/**********************
 *
 *  Device Management
 *
 **********************/

    function groups () {
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

      function assets () {
        function show () {
        
        }

        function list () {
        
        }
      }

      function devices () {
        function show () {
        
        }

        function list () {
        
        }
      }
    }


    function assets () {
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

      function devices () {
        function show () {
        
        }

        function list () {
        
        }
      }
    }


    function devices () {
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

      function config () {
        function create () {
        
        }

        function list () {
        
        }

        function download () {
        
        }
      }


      function streams (deviceId) {
        if(!deviceId) throw new Error('Device ID is not defined')

        function list (options) {
          return jQuery.ajax(defaultOptions.apiUrl+'devices/'+deviceId+'/streams', {
            crossDomain: true,
            headers: {
              'carriots.apiKey': self.options.apiKey
            },
            data: options,
            method: 'GET'
          });
        }

        function remove () {
        
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
