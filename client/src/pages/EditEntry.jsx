import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditEntry.css';

function EditEntry() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [form, setForm] = useState({ title: "", amount: "", category: "" });
	const [errors, setErrors] = useState({});

	useEffect(() => {
		fetch(`http://localhost:8000/api/entries/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setForm({
					title: data.title,
					amount: data.amount.toString(),
					category: data.category,
				});
			});
	}, [id]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({});
		try {
			const res = await fetch(`http://localhost:8000/api/entries/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					title: form.title,
					amount: parseFloat(form.amount),
					category: form.category,
				}),
			});
			if (!res.ok) {
				const err = await res.json();
				setErrors(err.errors || { submit: "Update failed" });
			} else {
				navigate("/budget");
			}
		} catch {
			setErrors({ submit: "Network error" });
		}
	};

	return (
		<div className="form-container">
			<h1>Edit Budget Entry</h1>
			<form className="edit-form" onSubmit={handleSubmit}>
				<div>
					<label>Title:</label>
					<input
						name="title"
						value={form.title}
						onChange={handleChange}
						required
					/>
					{errors.title && <p className="error-text">{errors.title[0]}</p>}
				</div>
				<div>
					<label>Amount:</label>
					<input
						name="amount"
						type="number"
						step="0.01"
						value={form.amount}
						onChange={handleChange}
						required
					/>
					{errors.amount && <p className="error-text">{errors.amount[0]}</p>}
				</div>
				<div>
					<label>Category:</label>
					<input
						name="category"
						value={form.category}
						onChange={handleChange}
						required
					/>
					{errors.category && (
						<p className="error-text">{errors.category[0]}</p>
					)}
				</div>
				<button type="submit">Save</button>
				{errors.submit && (
					<p className="error-text">{errors.submit}</p>
				)}
			</form>
		</div>
	);
}

export default EditEntry;
