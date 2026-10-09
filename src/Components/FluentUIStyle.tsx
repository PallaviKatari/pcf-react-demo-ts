import  {Button,Card,makeStyles,Text} from "@fluentui/react-components";

const useStyles = makeStyles({
    Card: {
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#e78888",
        textAlign: "center",
    },
    Text: {
        fontSize: "24px",
        color: "#720afa",
        marginBottom: "10px",
    },
    Button: {
        backgroundColor: "#0078d4",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px"
    }
})
    
function FluentUIStyle() {
  const styles = useStyles();

  return ( 
    <Card className={styles.Card}>
      <Text className={styles.Text} size={100}>
        Fluent UI Example
      </Text>
      <Button className={styles.Button} appearance="primary">
        Click Me
      </Button>
    </Card>
  );
}

export default FluentUIStyle;