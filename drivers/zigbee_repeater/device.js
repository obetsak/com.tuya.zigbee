'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');

class zigbeerepeater extends ZigBeeDevice {
		
	async onNodeInit({zclNode}) {

		this.printNode();

  }

	onDeleted(){
		this.log("Zigbee Repeater removed")
	}

}

module.exports = zigbeerepeater;
