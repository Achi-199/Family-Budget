import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEntry.css';  

function AddEntry() {
  const [form, setForm] = useState({ title: '', amount: '', category: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors({});

    try {
      const res = await fetch('http://localhost:8000/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title,
          amount: parseFloat(form.amount),
          category: form.category
        })
      });
      if (!res.ok) {
        const err = await res.json();
        setErrors(err.errors || { submit: 'Failed to save' });
      } else {
        navigate('/budget');
      }
    } catch {
      setErrors({ submit: 'Network error' });
    }
  };

  return (
    <div className="form-container">
      <h1>Add New Budget Entry</h1>
      <form className="budget-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
          {errors.title && <p className="error-text">{errors.title[0]}</p>}
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
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
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
          {errors.category && <p className="error-text">{errors.category[0]}</p>}
        </div>

        <button type="submit">Save</button>
        {errors.submit && <p className="error-text">{errors.submit}</p>}
      </form>
    </div>
  );
}

export default AddEntry;
