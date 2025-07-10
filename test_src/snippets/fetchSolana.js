export const fetchSolana = async (el, s) => {
      try {
        const response = await fetch('https://api.mainnet-beta.solana.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'getBlock',
            params: [
              430,
              {
                encoding: 'json',
                maxSupportedTransactionVersion: 0,
                transactionDetails: 'full',
                rewards: false,
              },
            ],
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        s.update({
          data
        });
      } catch (error) {
        console.error('Error making the request or updating the gauge:', error);
      }
    }