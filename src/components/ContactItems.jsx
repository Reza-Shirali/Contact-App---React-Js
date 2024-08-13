import React from "react";

import styles from "./ContactItems.module.css";

function ContactItems({data , deleteHandler}) {
  return (
    <>
        <li className={styles.item}>
            <p>{data.name} {data.lastName}</p>
            <p><span>🗳️</span> {data.email}</p>
            <p><span>📞</span> {data.phone}</p>
            <button onClick={() => deleteHandler(data.id)}>🗑️</button>
        </li>
    </>
  )
}

export default ContactItems;
