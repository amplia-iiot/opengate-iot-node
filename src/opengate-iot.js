'use strict';

var request = require('request');

module.exports = function(RED) {
    function OpenGateIotNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            let datastreams = [];
            Object.keys(msg.payload).forEach(function(datastreamId,_) {
                datastreams.push({
                    id: datastreamId,
                    datapoints:[
                        {
                            value: msg.payload[datastreamId],
                            at: msg.at || Date.now()
                        }]
                });
            });

            let openGateIotJson = {
                version: '8.0',
                device: msg.deviceId,
                datastreams: datastreams
            };

            let options = {
                url: 'http://api.opengate.es/south/v80/devices/' + msg.deviceId + '/collect/iot',
                headers: {
                  'X-ApiKey': msg.apiKey
                },
                method: 'POST',
                json: openGateIotJson
              };

            node.log(JSON.stringify(options, null, 2));

            request(options, function (error, response, body) {
                msg.error = error;
                msg.statusCode = response && response.statusCode;
                msg.payload = body;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("opengate-iot",OpenGateIotNode);
}
