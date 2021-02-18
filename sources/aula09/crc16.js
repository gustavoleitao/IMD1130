const crc16 = require('node-crc16-js');

function crc16FromString(str){
	const encoder = new TextEncoder()
	const txtEncoded = encoder.encode(str)
	return crc16(txtEncoded)
}

const key = 'key1'
const crc = crc16FromString(key)
const slot = crc % 16383

console.log(`CRC16 da chave ${key} é ${crc} ficando no slot ${slot}.`)