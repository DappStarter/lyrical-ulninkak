require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth stick miss harvest infant success stuff'; 
let testAccounts = [
"0xbcaee32b33c325901face8e7f613b927896e3e875235a49d0524095c32f4aa7e",
"0xd9d906f0b8241bea00152a78e7f86bee36ca33ecb1b0d8db127157b9f7f96d14",
"0x4446169c7fc84b678e15da29b4dec1d586b354d019eb002a86099c51044a662c",
"0x98e93c6dcb73bde232028381fa101ad5437ec07f8c6b220a1a75a2ff25db17f2",
"0x56e8f248718f99fc073b464f43b789a1bd94f29f18d79bbeb65e1bf034dd049b",
"0x32ee1f831cf1964e0f433d74d3d87ebea96e44416eb374bca61b21e299818ea5",
"0x54fccc092d0ca4b12714f57f47fc5d76b3789b1f6714001f158a0acf63d45618",
"0x1b7b42bb4c938bf745774453354637bfaf3ce950e7734b9dc6baf6d8d5b3acd7",
"0x3df201307b7bea0f8d9ff232d7d3a63b4fa425b6f78a47a124aa90568217ad4c",
"0x5c5b940fba6562dc2b8dce604ebd00d647928482a736f43a2216795fed66e061"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
