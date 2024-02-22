import styles from "./Footer.module.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/dmitrii-sagayko"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon color="primary" fontSize="large" />
      </a>

      <a href="mailto:dmitsag@gmail.com">
        <AlternateEmailIcon fontSize="large" />
      </a>
    </div>
  )
}

export default Footer
