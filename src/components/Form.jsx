import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Contacts from "./Contacts.jsx";

import styles from "./Form.module.css";

function Form() {
  const inputs = [
    {
      type: "text",
      name: "name",
      placeholder: "Name",
    },
    {
      type: "text",
      name: "lastName",
      placeholder: "last Name",
    },
    {
      type: "text",
      name: "email",
      placeholder: "email",
    },
    {
      type: "number",
      name: "phone",
      placeholder: "Phone number",
    },
  ];
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const addHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.lastName || !form.email || !form.phone) {
      setAlert("All fields are required");
      {
        setTimeout(() => setAlert(""), 3000);
      }
      return;
    }
    const newContact = { ...form, id: uuidv4() };
    setContacts((contacts) => [...contacts, newContact]);
    setForm({ name: "", lastName: "", email: "", phone: "" });
    console.log(contacts);
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  }

  return (
    <>
      <div className={styles.wrapper__form}>
        <form className={styles.form}>
          {inputs.map((input, index) => {
            return (
              <input
                key={index}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={form[input.name]}
                onChange={changeHandler}
              ></input>
            );
          })}
          <button className={styles.btn__add} onClick={addHandler}>
            Add Contact
          </button>
        </form>
      </div>
      <p className={alert ? styles.alert : styles.alert__hidden}>{alert}</p>

      <Contacts contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default Form;
