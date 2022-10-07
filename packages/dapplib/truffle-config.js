require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain method include kite bottom total'; 
let testAccounts = [
"0x0526a3d00c7fe8eaa49a7c865abf125c2ef26c07e5648d811487714656a93eaa",
"0x611dce0e51253dc0a33c0a07c7a638e4c39b54c9f445bc2927d3bb2b407e4f55",
"0x755144df42c6c3f1397c61673124e30802e619aa4f2018e4e883b8336b65a98c",
"0x3c966c4eda814bc562d080e7783e32982fd7697c23d0299e8b41b2d12f7859fc",
"0xdb0823c36a829cf8ff99ae439d267150cd3ac1a44dd871c989eba616fa613ff6",
"0x6a249d10b078f222a8283f6a7f73becacadf767c787d05edfff448e8f1e4e96c",
"0xd3d540785615a8b3055eb6840a74dfff0d13dba2657d3aff3fcbdcd5f5bc9e18",
"0xb7bbb1b156741ff8d3ddedd8faf6a19a42c8b5020d9c116b60e9e6095c5b3c76",
"0x0fb625c58abd4f37d157c653819fe6f9f46bcb2453b674b26faa4419b9655d1e",
"0x7ad5dd7962c0cda020692b7fbf1d8d35ce3d69fe75990003e476dfaf1344af2f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


