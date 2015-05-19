#CarriotsJS is library for Carriot - Internet of Things Platform
Demo
====
![demo](http://s8.postimg.org/ojg18ss51/Screenshot_from_2015_05_19_03_40_46.png) 

[Visit DEMO](http://rawgit.com/lucasbrigida/carriots-js/master/test/index.html)

Description
=========
CarriotsJS is a library for javascript to be used in the integration of hardware and software through the internet platform of the things Carriots

CarriotJS is a module for expose Carriots REST API, benefits:
- Easy integration
- Get and Send Data from your browser.
- CORS Enabled.


### Prerequisites
You need the **jquery** installed, if you not have in your project, run command below:
``` sh
$ bower install jquery --save
```
### Install
``` sh
$ bower install carriots-js --save
```
Don't know **Carriots** [learn more](https://www.carriots.com).
[Carriots Documentation](https://www.carriots.com/documentation/api)

### Uninstall
``` bash
$ bower uninstall carriots-js --save
```
### How use - Get data
Get data from a specific device. [Follow specification](https://www.carriots.com/documentation/api/device_management#d-list-stream), 
``` javascript
  Carriots.config({
    apiKey: '4852309cd37ff6b1ffa6a807608166ecb31ba5b79cec49951dc3dc69fcef2ea3'
  });
  var arduino = Carriots.devices();
  arduino.streams().list('defaultDevice@lucasbrigida.lucasbrigida', {
    sort: 'at',
    order: -1
  })
  .done(function(res){
    console.log(res);
  });
```

``` json
{"total_documents":1,"result":[{"_id":"555ae15b5c5d756b035b751d","protocol":"v1","checksum":"","_t":"str","at":1432019291,"device":"defaultDevice@lucasbrigida.lucasbrigida","data":{"coffees":1},"id_developer":"c593e6ae8c89d97af2fac016e7cf322eeeb7491efe06766e0d59f9fdd5720c65@lucasbrigida.lucasbrigida","created_at":1432019291,"owner":"lucasbrigida"}]}
```

### How use - Send data
```` javascript
  var stream = Carriots.streams();
  stream.create({
      "protocol": "v1",
      "checksum": "",
      "device": "defaultDevice@lucasbrigida.lucasbrigida",
      "at": "now",
      "data": {
        "coffees": 1
      }
    })
    .done(function(res) {
      console.log(res);
    });
```
### Version
1.0.0

### Todo's
 - Create interface for Rule Management
 - Create interface for Triggers
 - Create Test units

License
----
MIT


**Free Software, Hell Yeah!**