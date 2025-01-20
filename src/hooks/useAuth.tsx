import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Interface cho dữ liệu đăng ký
interface UserData {
  firstname: string;
  lastname: string;
  username: string;
  // email: string;
  password: string;
}

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook để điều hướng

  // Hàm gọi API với fetch
  const callApi = async (
    url: string,
    method: string,
    body: Record<string, any> = {},
    token?: string
  ) => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: method === "GET" ? undefined : JSON.stringify(body), // Không gửi body nếu là GET
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Incorrect username or password");
      }

      return response.json(); // Trả về dữ liệu JSON từ server
    } catch (err: any) {
      throw new Error(err.message || "Something went wrong");
    }
  };

  // Hàm xử lý đăng nhập
  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Gọi API đăng nhập
      const loginData = await callApi(
        "http://localhost:5001/api/Auth/login",
        "POST",
        { username, password }
      );

      // Lưu token vào localStorage
      const token = loginData.data.token;
      localStorage.setItem("authToken", token);

      // Gọi API lấy thông tin người dùng
      const userData = await callApi(
        "http://localhost:5001/api/Users/me",
        "GET", // Sử dụng GET mà không cần body
        {},
        token
      );

      const fullName = `${userData.data.firstName} ${userData.data.lastName}`;

      // Điều hướng về trang home
      navigate("/");
      alert(`Hello ${fullName}`);
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData: UserData) => {
    setLoading(true);
    setError(null);
    try {
      // Gọi API đăng ký
      const signupData = await callApi(
        "http://localhost:5001/api/Auth/register",
        "POST",
        {
          firstName: userData.firstname,
          lastName: userData.lastname,
          userName: userData.username,
          // email: userData.email,
          password: userData.password,
        }
      );

      alert(signupData.message || "Registration successful!");
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, signup, loading, error };
};

export default useAuth;
