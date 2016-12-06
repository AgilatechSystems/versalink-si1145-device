/*
Copyright © 2016 Agilatech. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const VersalinkDevice = require('versalink-device');
const device = require('@agilatech/si1145');

module.exports = class Si1145 extends VersalinkDevice {

	constructor(options) {

		// The bus/file must be defined. If not supplied in options, then default to i2c-1
  		const i2cBus  = options['bus'] || "/dev/i2c-1";

  		// SI1145 device constructor takes two arguments: the bus/file and the address.
		// In this case, the address is fixed on the hardware, so it is just hardcoded here.
	  	const hardware = new device.Si1145(i2cBus, 0x60);

		super(hardware, options);
  		
	}
}



