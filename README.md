## 🟢 Simple Token Swap Widget (React + ethers.js + Uniswap SDK)

**Prerequisites:**
- Node.js & npm/yarn
- React app (e.g., create-react-app)
- Install dependencies:
```bash
npm install ethers @uniswap/sdk-core @uniswap/v3-sdk @uniswap/widgets
```

---

### 1. Basic Swap Widget using Uniswap Widget

The easiest way is to use [Uniswap’s official widget](https://docs.uniswap.org/sdk/widgets/swap-widget).

```jsx
// App.js
import React from "react";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

// Replace with your own Infura/Alchemy project ID (for mainnet access)
const infuraId = "YOUR_INFURA_ID";

const jsonRpcUrlMap = {
1: [`https://mainnet.infura.io/v3/${infuraId}`],
};

function App() {
return (



);
}

export default App;
```

**Instructions:**
- Replace YOUR_INFURA_ID with your own Infura or Alchemy project ID.
- The widget will let users connect their wallet and swap tokens directly.

---

### 2. Advanced: Custom Swap Logic (ethers.js + Uniswap SDK)

If you want to build your own UI and logic, you’ll need:
- Connect wallet (MetaMask)
- Select tokens and amounts
- Build and send the swap transaction using Uniswap SDK

This is more advanced—let me know if you want a full custom example!

---

## 🔗 References

- [Uniswap Widget Docs](https://docs.uniswap.org/sdk/widgets/swap-widget)
- [Uniswap SDK Examples](https://github.com/Uniswap/interface)
- [Ethers.js Docs](https://docs.ethers.io/)

---

### 🚀 Next Steps

- Do you want a full custom widget (not Uniswap-branded)?
- Should it support only Ethereum, or other chains too?
- Any specific tokens or UI requirements?

Let me know your preferences, and I can generate a more tailored code example!
