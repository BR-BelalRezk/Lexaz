/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import Spinner from "../shared/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuth } = useUser();
  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/login");
  }, [isAuth, isLoading, navigate]);
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  if (isAuth) return children;
}
