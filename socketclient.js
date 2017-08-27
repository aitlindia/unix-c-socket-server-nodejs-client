/**
 * Created by alpha on 27/8/17.
 */

var net = require('net');

var client = net.createConnection("/home/alpha/EmbeddedLinux/Linux_Socket/soc");

client.on("connect", function() {
    //... do something when you connect ...
    console.log("Socket connected.......");
    client.write("Hellow World....");
});

client.on("data", function(data) {
    //... do stuff with the data ...
    console.log("RECV Data: "+ data);
});


