import React from "react";

import ContactItems from "./ContactItems.jsx";

import styles from "./Contacts.module.css";

function Contacts({ contacts, deleteHandler }) {
  return (
    <>
      <div className={styles.wrapper__contacts}>
        <h3>Contacts List</h3>
        <ul className={styles.contacts}>
          {contacts.length ? (
            contacts.map((contact) => (
              <ContactItems key={contact.id} data={contact} deleteHandler={deleteHandler} />
            ))
          ) : (
            <p className={styles.message}>No Contact Yet!</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default Contacts;
