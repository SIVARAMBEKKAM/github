// import { signOut } from "firebase/auth";
// import { auth } from "./firebase";
// import { useNavigate } from "react-router-dom";
// function Dashboard() {

//   const navigate = useNavigate();

//   const logout = async () => {

//     await signOut(auth);

//     localStorage.clear();

//     navigate("/");
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <button onClick={logout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h2>SubOptimize</h2>
          <span>Enterprise Plan</span>
        </div>

        <ul className="menu">
          <li>Dashboard</li>
          <li className="active">Subscriptions</li>
          <li>Usage</li>
          <li>Billing</li>
          <li>Insights</li>
          <li>Settings</li>
        </ul>

        <button className="upgrade-btn">Upgrade Plan</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <input
            type="text"
            placeholder="Search subscriptions..."
            className="search-bar"
          />

          <div className="profile">
            <div>
              <strong>Alex Rivera</strong>
              <p>Admin</p>
            </div>
          </div>
        </header>

        <section className="subscription-container">
          <h1>Add New Subscription</h1>
          <p>
            Track your organizational tools and recurring expenses in one place.
          </p>

          {/* Vendor Info */}
          <div className="card">
            <h3>1 Vendor Information</h3>

            <div className="form-grid">
              <div>
                <label>Vendor Name</label>
                <input
                  type="text"
                  placeholder="e.g Netflix, AWS, Slack"
                />
              </div>

              <div>
                <label>Category</label>
                <select>
                  <option>Select a category</option>
                  <option>SaaS</option>
                  <option>Cloud</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className="card">
            <h3>2 Billing Details</h3>

            <div className="billing-grid">
              <div>
                <label>Amount</label>
                <input
                  type="number"
                  placeholder="$ 0.00"
                />
              </div>

              <div>
                <label>Billing Cycle</label>

                <div className="toggle">
                  <button
                    className={
                      billingCycle === "Monthly"
                        ? "active-toggle"
                        : ""
                    }
                    onClick={() =>
                      setBillingCycle("Monthly")
                    }
                  >
                    Monthly
                  </button>

                  <button
                    className={
                      billingCycle === "Yearly"
                        ? "active-toggle"
                        : ""
                    }
                    onClick={() =>
                      setBillingCycle("Yearly")
                    }
                  >
                    Yearly
                  </button>
                </div>
              </div>

              <div>
                <label>Renewal Date</label>
                <input type="date" />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="card">
            <h3>3 Additional Info</h3>

            <label>Notes</label>

            <textarea
              rows="5"
              placeholder="Internal justification, department allocation..."
            />

            <label>Attachment for receipts</label>

            <div className="upload-box">
              Click to upload or drag and drop
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="action-bar">
            <button className="cancel-btn">
              Cancel
            </button>

            <button className="save-btn">
              Save Subscription
            </button>
          </div>

          {/* Tips */}
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Pro Tip</h4>
              <p>
                Subscriptions with yearly billing
                cycles often offer discounts.
              </p>
            </div>

            <div className="tip-card secure">
              <h4>Secure Storage</h4>
              <p>
                Uploaded receipts are encrypted
                and securely stored.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;