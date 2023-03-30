import React from "react";

function PizzaForm({ form, onSetForm, onHandleSubmit }) {
  function handleInputChange(e) {
    onSetForm({ ...form, [e.target.name] : e.target.value })
  }

  function handleRadioChange(e) {
    e.target.value === "Vegetarian" ? onSetForm({ ...form, vegetarian: true }) : onSetForm({ ...form, vegetarian: false })
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={form.topping}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <select 
            className="form-control" 
            name="size" 
            value={form.size}
            onChange={handleInputChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={form.vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!form.vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
