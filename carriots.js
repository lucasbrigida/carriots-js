var Carriots = (function() {
    var self = this;
    var defaultOptions = {
      apiUrl: 'http://api.carriots.com/'
    };

    function config(options) {
      self.options = options;
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

      function delete () {
        
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

      function delete () {
        
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

      function delete () {
        
      }

      function config () {
        function create () {
        
        }

        function list () {
        
        }

        function download () {
        
        }
      }

      function streams () {
        function list () {
        
        }

        function delete () {
        
        }
      }
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

      function delete () {
        
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

      function delete () {
        
      }
    }

    function streams () {
      function create () {
        
      }
      
      function show () {
        
      }

      function list () {
        
      }

      function delete () {
        
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

      function delete () {
        
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

      function delete () {
        
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

      function delete () {
        
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
