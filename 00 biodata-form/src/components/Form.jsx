import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments:"", isFriendly: false, employment: "", favColor:"" })

  // console.log(formData.favColor)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
      <br />
      <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName} />
      <br />
      <input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email}/>
      <br />
      <textarea name="comments" value={formData.comments} onChange={handleChange} />
      <br />
      <input type="checkbox" id="isFriendly" checked={formData.isFriendly} onChange={handleChange} name="isFriendly" />
      <label htmlFor="isFriendly">Are You Friendly?</label>

      <fieldset>
        <legend>Current Employment Status</legend>

        <input type="radio" id="unemploymed" name="employment" value="unemployed" onChange={handleChange} />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input type="radio" id="part-time" name="employment" value="part-time" onChange={handleChange}/>
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input type="radio" id="full-time" name="employment" value="full-time" onChange={handleChange}/>
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <select name="favColor" id="favColor" value={formData.favColor} onChange={handleChange}>
        <option value="">--Choose--</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />

      <button>Submit</button>
    </form>
  );
}

//semua properti dari prevFormData (menggunakan spread operator ...prevFormData), dan kemudian Anda memperbarui properti dengan nama yang sesuai dengan event.target.name (nama dari input yang memicu perubahan) dengan nilai event.target.value (nilai dari input yang berubah).

/* kl ngga pake destructur
const name = event.target.name;
const value = event.target.value;
const type = event.target.type;
const checked = event.target.checked; 
*/
