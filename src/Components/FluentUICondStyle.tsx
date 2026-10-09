import { makeStyles, Button } from "@fluentui/react-components";

import { useState } from "react";

const useStyles = makeStyles({
  container: {
    padding: "20px",
    borderRadius: "10px",
  },
  activeContainer: {
    backgroundColor: "lightgreen",
    border: "2px solid gray",
  },
  inactiveContainer: {
    backgroundColor: "lightgray",
    border: "2px solid gray",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  activeTitle: {
    color: "green",
  },
  inactiveTitle: {
    color: "gray",
  },
});

function CondStyle() {
  const styles = useStyles();

  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${styles.container}
        ${isActive ? styles.activeContainer : styles.inactiveContainer}`}
    >
      <h1
        className={
          isActive
            ? `${styles.title} ${styles.activeTitle}`
            : `${styles.title} ${styles.inactiveTitle}`
        }
      >
        {isActive ? "Active" : "Inactive"}
      </h1>
      
      <Button appearance="primary" onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </Button>
    </div>
  );
}

export default CondStyle;
