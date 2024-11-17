import InitalButton from "../components/buttons/buttons";
import LoginModal from "../components/modal/modal";
import styles from "./login.css";
export default function Login() {
    return ( 
        <div id="loginPage" className={styles.loginPage}>
            <p>Login Page</p>
            <LoginModal />
        </div>
    );
}