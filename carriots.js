var Carriots = (function() {
  var self = this;
  var defaultOptions = {
    apiUrl: 'http://api.carriots.com/'
  };

  function config(options) {
    self.options = options;

    if (!options['apiKey']) {
      throw new Error('apiKey is not defined in config');
    }

    //Set default headers
    defaultOptions.headers = {
      'carriots.apiKey': self.options.apiKey
    };
  }

  /**********************
   *
   *  Device Management
   *
   **********************/

  function groups() {
    function create(options) {
      return jQuery.ajax({
        method: 'POST',
        url: defaultOptions.apiUrl + 'groups/',
        data: JSON.stringify(options),
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function show(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'groups/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function list(options) {
      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'groups/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function update(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'PUT',
        url: defaultOptions.apiUrl + 'groups/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function remove(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'DELETE',
        url: defaultOptions.apiUrl + 'groups/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function assets() {
      function show(groupId, assetId) {
        if (!groupId) throw new Error('Group ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'groups/' + groupId + '/assets/' + assetId + '/',
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list(developerId) {
        if (!developerId) throw new Error('Developer ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'groups/' + developerId + '/assets/',
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      return {
        show: show,
        list: list
      };
    }

    function devices() {
      function show(groupId, deviceId) {
        if (!groupId) throw new Error('Group ID is not defined');
        if (!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'groups/' + groupId + '/devices/' + deviceId + '/',
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list(developerId) {
        if (!developerId) throw new Error('Developer ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'groups/' + developerId + '/devices/',
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


  function assets() {
    function create(options) {
      return jQuery.ajax({
        method: 'POST',
        url: defaultOptions.apiUrl + 'assets/',
        data: JSON.stringify(options),
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function show(developerId) {
      if (!developerId) throw new Error('Developer ID is not defined');

      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'assets/' + developerId + '/',
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function list(options) {
      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'assets/',
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function update(developerId, options) {
      if (!developerId) throw new Error('Developer ID is not defined');

      return jQuery.ajax({
        method: 'PUT',
        url: defaultOptions.apiUrl + 'assets/' + developerId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function remove(developerId, options) {
      if (!developerId) throw new Error('Developer ID is not defined');

      return jQuery.ajax({
        method: 'DELETE',
        url: defaultOptions.apiUrl + 'assets/' + developerId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function devices() {
      function show(assetId, deviceId, options) {
        if (!assetId) throw new Error('Asset ID is not defined');
        if (!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'assets/' + assetId + '/devices/' + deviceId + '/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list(developerId, options) {
        if (!developerId) throw new Error('Developer ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'assets/' + developerId + '/devices/',
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


  function devices() {
    function create(options) {
      return jQuery.ajax({
        method: 'POST',
        url: defaultOptions.apiUrl + 'devices/',
        data: JSON.stringify(options),
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function show(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'devices/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function list(options) {
      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'devices/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function update(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'PUT',
        url: defaultOptions.apiUrl + 'devices/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function remove(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'DELETE',
        url: defaultOptions.apiUrl + 'devices/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function config() {
      function create(deviceId, options) {
        if (!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'POST',
          url: defaultOptions.apiUrl + 'devices/' + deviceId + '/deviceconfigs/',
          data: JSON.stringify(options),
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function list(deviceId, options) {
        if (!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'devices/' + deviceId + '/deviceconfigs/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function download(deviceId, fileName, fileVersion) {
        if (!deviceId) throw new Error('Device ID is not defined');
        if (!fileName) throw new Error('File Name is not defined');
        if (!fileVersion) throw new Error('File Version is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'devices/' + deviceId + '/deviceconfigs/' + fileName + '/' + fileVersion + '/',
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }
    }


    function streams(deviceId) {
      function list(deviceId, options) {
        if (!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'GET',
          url: defaultOptions.apiUrl + 'devices/' + deviceId + '/streams/',
          data: options,
          crossDomain: true,
          headers: defaultOptions.headers
        });
      }

      function remove(deviceId, options) {
        if (!deviceId) throw new Error('Device ID is not defined');

        return jQuery.ajax({
          method: 'DELETE',
          url: defaultOptions.apiUrl + 'devices/' + deviceId + '/streams/',
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


  function models() {
    function create(options) {
      return jQuery.ajax({
        method: 'POST',
        url: defaultOptions.apiUrl + 'models/',
        data: JSON.stringify(options),
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function show(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'models/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function list(options) {
      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'models/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function update(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'PUT',
        url: defaultOptions.apiUrl + 'models/' + deviceId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function remove(deviceId, options) {
      if (!deviceId) throw new Error('Device ID is not defined');

      return jQuery.ajax({
        method: 'DELETE',
        url: defaultOptions.apiUrl + 'models/' + deviceId + '/',
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
  function streams() {
    function create(options) {
      return jQuery.ajax({
        url: defaultOptions.apiUrl + 'streams/',
        method: 'POST',
        data: JSON.stringify(options),
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function show(developerId, options) {
      if (!developerId) throw new Error('Developer ID is not defined');

      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'streams/' + developerId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function list(options) {
      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'streams/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function remove(developerId, options) {
      if (!developerId) throw new Error('Developer ID is not defined');

      return jQuery.ajax({
        method: 'DELETE',
        url: defaultOptions.apiUrl + 'streams/' + developerId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    return {
      create: create,
      show: show,
      list: list,
      remove: remove
    };
  }


  function status() {
    function create(options) {
      return jQuery.ajax({
        method: 'POST',
        url: defaultOptions.apiUrl + 'status/',
        data: JSON.stringify(options),
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function show(developerId, options) {
      if (!developerId) throw new Error('Developer ID is not defined');

      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'streams/' + developerId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function list(options) {
      return jQuery.ajax({
        method: 'GET',
        url: defaultOptions.apiUrl + 'streams/?_t=sta',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    function remove(developerId, options) {
      if (!developerId) throw new Error('Developer ID is not defined');

      return jQuery.ajax({
        method: 'DELETE',
        url: defaultOptions.apiUrl + 'streams/' + developerId + '/',
        data: options,
        crossDomain: true,
        headers: defaultOptions.headers
      });
    }

    return {
      create: create,
      show: show,
      list: list,
      remove: remove
    };
  }


  function triggers() {
    function create() {

    }

    function show() {

    }

    function list() {

    }

    function update() {

    }

    function remove() {

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
   *  Rules Management
   *
   **********************/
  function rules() {
    function create() {

    }

    function show() {

    }

    function list() {

    }

    function update() {

    }

    function remove() {

    }

    return {
      create: create,
      show: show,
      list: list,
      update: update,
      remove: remove
    };
  }


  function listeners() {
    function create() {

    }

    function show() {

    }

    function list() {

    }

    function update() {

    }

    function remove() {

    }

    return {
      create: create,
      show: show,
      list: list,
      update: update,
      remove: remove
    };
  }

  return {
    config: config,
    groups: groups,
    assets: assets,
    devices: devices,
    models: models,

    streams: streams,
    status: status,
    triggers: triggers,

    rules: rules,
    listeners: listeners
  };
}());
