// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, { FC } from "react"
import { useAppSelector } from "../../app/hooks"
import { Navigate } from "react-router-dom"

interface IProps {
  outlet: JSX.Element
}
const ProtectedRoute: FC<IProps> = ({ outlet }) => {
  const token = localStorage.getItem("token")
  if (token) {
    return outlet
  }
  return <Navigate to="../login" />
}

export default ProtectedRoute