# 🧾 Code Marketplace

A decentralized code snippet marketplace built with **React**, **ethers.js**, and **MetaMask** support on the **Sepolia Testnet**.

---

## 🚀 Features

- 🔐 Connect your wallet using MetaMask
- 💸 Buy code snippets using Sepolia ETH
- 🛒 Create and sell your own code listings
- 💾 Store and load listings from localStorage
- 📈 View account address and balance

---

## 🛠️ Tech Stack

| Frontend     | Web3                 | Styling        |
|--------------|----------------------|----------------|
| React.js     | ethers.js v6         | Tailwind CSS (optional) |
| MetaMask     | Sepolia Testnet ETH  | Custom CSS     |

---

## 🧠 Core Concepts Explained

### 1. Web3 Wallet Integration
- Uses MetaMask to connect the user's Ethereum wallet.
- Requests account access and ensures connection to the Sepolia testnet.

```js
await window.ethereum.request({ method: 'eth_requestAccounts' });
```

### 2. Ethereum Blockchain Interaction
- Uses `BrowserProvider` and `signer.sendTransaction` to initiate ETH transfers:

```js
const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const tx = await signer.sendTransaction({
  to: listing.seller,
  value: parseEther(listing.price)
});
```

### 3. LocalStorage as Temporary Database
- Stores and loads code listings using `localStorage`, acting as a mock backend.

```js
localStorage.setItem('codeListings', JSON.stringify(listings));
```

---

## 🔄 Application Flow

1. **User opens app** → Checks MetaMask and Sepolia network.
2. **Connect Wallet** → Shows wallet address and ETH balance.
3. **Explore Listings** → Browse available code snippets.
4. **Buy Code** → ETH is sent to seller; item marked as sold.
5. **Create Listing** → Add title, code, price, etc. to sell.


## 🌐 Use Cases

- Developers selling useful code snippets
- Teaching Web3 basics to students or juniors
- Creating a decentralized freelance platform
- Hackathon & portfolio Web3 showcase
