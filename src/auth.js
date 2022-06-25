import * as nearAPI from "near-api-js";

const { connect, keyStores, WalletConnection } = nearAPI;

const CONTRACT_NAME = "example-contract.testnet"

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};


// redirects user to wallet to authorize your dApp
// this creates an access key that will be stored in the browser's local storage
// access key can then be used to connect to NEAR and sign transactions via keyStore

export async function initContract() {
      // connect to NEAR
    const near = await connect(config);
    console.log("near connected")

    // create wallet connection
    const connection = new WalletConnection(near)

    window.walletConnection = connection

    window.accountId = connection.getAccountId()
    console.log("connected as:", window.accountId)
};

// redirects user to wallet to authorize your dApp
// this creates an access key that will be stored in the browser's local storage
// access key can then be used to connect to NEAR and sign transactions via keyStore

export const nearSignIn = () => {
   window.walletConnection.requestSignIn(CONTRACT_NAME)
   console.log("signin: connected as:", window.accountId)
}

export const nearSignOut = () => {
    window.walletConnection.signOut()
    console.log("signout: connected as:", window.accountId)
}