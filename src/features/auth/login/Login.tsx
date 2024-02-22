import type ICredentials from "./types/Credentials"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import styles from "./Login.module.css"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import useLocalStorage from "../../../app/useLS"
import { authLogin } from "./authAction"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useLocalStorage("username", "")
  const [password, setPassword] = useLocalStorage("password", "")

  const { counter } = useAppSelector(state => state.beer)
  function getTheme() {
    const data = localStorage.getItem("theme")
    return data
  }
  const [theme, setTheme] = useState<string | null>(getTheme())
  useEffect(() => {
    setTheme(getTheme())
  }, [counter])

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() 
    const userData: ICredentials = { username, password }
    dispatch(authLogin(userData))
    navigate("../")
  }

  return (
    <div key={counter}>
      <h4> username: 'kminchelle', password: '0lelplR',</h4>
      <form
        className={styles.formWrapper}
        data-isblack={theme}
        onSubmit={login}
      >
        <TextField
          required
          type="user"
          label="username"
          className={styles.input}
          value={username}
          key={counter}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          required
          type="password"
          label="password"
          className={styles.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" className={styles.button}>
          login
        </Button>
      </form>
    </div>
  )
}

export default Login
