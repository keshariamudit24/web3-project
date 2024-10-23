import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractAddress, contractABI } from '../utils/constants';

export const TransactionContext = React.createContext();

const getEthereumContract = () => {
    const { ethereum } = window; // Destructure here, inside the function

    if (!ethereum) {
        console.log("No Ethereum object found. Make sure you have MetaMask installed.");
        return null;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider, 
        signer,
        transactionContract
    });

    return transactionContract;
}

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window; // Destructure inside this function

            if (!ethereum) return alert("Please Install MetaMask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window; // Destructure inside this function

            if (!ethereum) return alert("Please Install MetaMask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    const sendTransaction = async () => {
        try {
            const { ethereum } = window; // Destructure inside this function

            if (!ethereum) return alert("Please Install MetaMask");

            // Get data from the form
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();

            if (!transactionContract) {
                return console.log("No Ethereum contract found.");
            }

            // You can add the rest of your transaction logic here
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}
