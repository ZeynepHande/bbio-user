import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ListUser } from "./Pages/ListUser";
import { AddUser } from "./Pages/AddUser";
import { Login } from "./Pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthLayout } from "./Pages/Layouts/AuthLayout";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/dashboard" element={<AuthLayout />}>
            <Route path="" element={<ListUser />} />
            <Route path="create" element={<AddUser />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
