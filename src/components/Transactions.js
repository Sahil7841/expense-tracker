import React, { useEffect, useState } from "react"; 
import styled from "styled-components"; 
import TransactionItem from "./TransList"; 

const Container = styled.div``; 

const Heading = styled.h2` 
font-size: 25px; 
font-weight: 600; 
`; 


const TransactionItems = styled.div``; 

const TransactionsContainer = ({ transactions, removeTransaction }) => { 
const [searchInput, setSearchInput] = useState(""); 
const [filteredTransactions, setFilteredTransactions] = useState(transactions); 

const filteredData = (searchInput) => { 
	if (!searchInput || !searchInput.trim().length) { 
	setFilteredTransactions(transactions); 
	return; 
	} 

	let filtered = [...filteredTransactions]; 
	filtered = filtered.filter( 
	(item) => 
		item.details.toLowerCase().includes(searchInput.toLowerCase().trim()) 
	); 
	setFilteredTransactions(filtered); 
}; 

useEffect(() => { 
	filteredData(searchInput); 
}, [transactions, searchInput]); 

return ( 
	<Container> 
	<Heading>Transactions</Heading> 

	<TransactionItems> 
		{filteredTransactions?.length ? ( 
		filteredTransactions.map((transaction) => ( 
			<TransactionItem 
			transaction={transaction} 
			key={transaction.id} 
			removeTransaction={removeTransaction} 
			/> 
		)) 
		) : ( 
		<p>No Transactions</p> 
		)} 
	</TransactionItems> 
	</Container> 
); 
}; 

export default TransactionsContainer; 
