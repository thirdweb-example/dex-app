> [!Important]  
> This repository is referencing the `mumbai` chain.
> 
> `Mumbai` [is deprecated since 08/04/2024](https://blog.thirdweb.com/deprecation-of-mumbai-testnet/), meaning the code in this repository will no longer work out of the box.
>
> You can still use this repository, however you will have to switch any references to `mumbai` to another chain.

# DEX app

Create your own DEX for your ERC-20 token. Find the related contracts in the [dex-contracts repository](https://github.com/thirdweb-example/dex-contracts).

## Installation

After cloning this repository, install the dependencies using the following command:

```bash
# npm
npm install

# yarn
yarn install
```

## Adding details

Make sure you deploy the contracts specified in the dex-contracts repository and add the contract details in the `const/details.ts` file.

## Running the app

Use the following command to start the development server:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Conclusion

If you need any support, feel free to join our [Discord server](https://discord.gg/thirdweb) and ask us. If you have any feedback related to thirdweb, please leave it on our [feedback board](https://feedback.thirdweb.com).
