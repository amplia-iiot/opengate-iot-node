# OpenGate IOT Node

Node-RED node to send IOT data to our [OpenGate](https://www.amplia-iiot.com/iot-platform/) IOT platform.

## Getting started

### Prerequisites

This software must be installed to deploy and run the OpenGate IOT node:
- [Node.js](https://nodejs.org/en/download/package-manager/)
- [Node-RED](https://nodered.org/docs/getting-started/local)

### Deploying OpenGate IOT node

To deploy the OpenGate IOT node in your Node-RED server

```shell
# Clone the repository
git clone https://github.com/fjdearcos-amplia/opengate-iot-node <opengate-iot-node-location>
# Move to your node-red location (usually $USER/.node-red)
cd <node-red-location>
# Install OpenGate IOT node
npm install <opengate-iot-node-location>
```

The build includes two ODA assemblies to make some test with our software using MQTT and CoAP protocols. The assemblies can be found inside *oda-demos* folder.

### Running

Run Node-RED as usual and you will find the OpenGate IOT node added to your nodes under the OpenGate category.

```shell
node-red
```

See the *Node Help* section in the node information to find out how to use the OpenGate IOT Node.

### Next steps

If you want to send IOT data from Node-RED to our [OpenGate](https://www.amplia-iiot.com/iot-platform/) IOT platform, please [contact our sales team](https://www.amplia-iiot.com/contact-amplia/) and feel the full potential of our IoT platform seing your data online and so much more. The sales team will analyze your business needs and give you access to a user and an Api-Key to use in your OpenGate IOT Node.

## Contributing

The OpenGate IOT Node is developed by Amplía Soluciones company as open-source. We will be pleased to have feedback and suggestions of addons you may find interesting.

Feel free to contact us writing to [opengateiotnode@amplia.es](mailto:opengateiotnode@amplia.es?subject=[GitHub]) or opening your pull request.

## License

The code in this project is licensed under Apache License 2.0 [LICENSE](LICENSE)