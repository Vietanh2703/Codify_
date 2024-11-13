import React from 'react';
import './Users.css';

function Users() {
    return (
        <div className="users">
            <h1>User</h1>
            <p>Welcome to the admin dashboard.</p>
            <div className="admin-actions">
                <button>Manage Users</button>
                <button>View Reports</button>
                <button>Settings</button>
            </div>
        </div>
    );
}

export default Users;