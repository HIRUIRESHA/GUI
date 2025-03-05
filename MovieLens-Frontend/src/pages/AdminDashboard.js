import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/AdminDashboard.css"; // Add custom CSS for the dashboard

function AdminDashboard() {
  const [userData, setUserData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const token = sessionStorage.getItem("authToken");

      if (!token) {
        setErrorMessage("User is not logged in");
        return;
      }

      const response = await axios.get(
        "http://localhost:3000/api/auth/get-userDetails",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        const user = response.data.user;

        // Check if the userType is "admin"
        if (user.userType !== "admin") {
          setErrorMessage("Access denied: You are not authorized to view this page.");
          navigate("/login"); // Redirect non-admins to login page
        } else {
          setUserData(user);
          let userInfo = {
            isLoggedIn: true,
            userData: user,
          };
          sessionStorage.setItem("userData", JSON.stringify(userInfo));
        }
      } else {
        setErrorMessage(response.data.message || "Failed to fetch user details");
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
      setErrorMessage(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><a href="/admin-dashboard">Dashboard</a></li>
          <li><a href="/manage-users">Manage Users</a></li>
          <li><a href="/manage-movies">Manage Movies</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Admin Dashboard</h2>
        {errorMessage ? (
          <div style={{ textAlign: "center", color: "red" }}>
            <h3>{errorMessage}</h3>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3>Welcome, Admin</h3>
            <h4>{userData.name}</h4>
            <h5>{userData.email}</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
