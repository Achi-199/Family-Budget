import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Budget.css"; 

function Budget() {
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/entries")
			.then((res) => res.json())
			.then((data) => setEntries(data));
	}, []);

	return (
		<div className="budget-container">
			<div className="budget-header">
				<h1 className="budget-title">Budget Entries</h1>
				<Link to="/budget/add" className="new-entry-button">
					+ New Entry
				</Link>
			</div>

			<table className="budget-table">
				<thead>
					<tr>
						<th>Title</th>
						<th className="amount">Amount</th>
						<th>Category</th>
						<th className="actions">Actions</th>
					</tr>
				</thead>
				<tbody>
					{entries.map((entry) => (
						<tr key={entry.id}>
							<td>{entry.title}</td>
							<td className="amount">
								{entry.amount >= 0 ? (
									<span style={{ color: "green" }}>
										+${entry.amount.toFixed(2)}
									</span>
								) : (
									<span style={{ color: "red" }}>
										-${Math.abs(entry.amount).toFixed(2)}
									</span>
								)}
							</td>
							<td>{entry.category}</td>
							<td className="actions">
								<Link to={`/budget/edit/${entry.id}`}>
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Budget;
