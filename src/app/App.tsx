import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import Cabins from "../pages/Cabins";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import GlobalStyles from "../styles/GlobalStyles";
import AppLayout from "../components/layout/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const querClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={querClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Toaster position="top-center" gutter={15} containerStyle={{margin:'10px'}} toastOptions={{
        success:{
          duration:5000
        },
        error:{
          duration:5000
        },
        style:{
          fontSize:"15px",
          maxWidth:"500px",
          padding:'15px 25px',
          backgroundColor:'var(--color-gray-0)',
          color:'var(--color-gray-700)',

        }
      }}/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={"/dashboard"} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
