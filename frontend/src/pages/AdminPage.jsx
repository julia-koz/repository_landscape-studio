import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

const AdminPage = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Update request status
    const updateStatus = async (id, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/api/requests/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });
            if (!response.ok) throw new Error('Failed to update status');

            const updatedRequest = await response.json();
            setRequests(prev =>
                prev.map(r => (r.id === id ? updatedRequest.request : r))
            );
        } catch (err) {
            alert(err.message);
        }
    };

    // Delete request
    const deleteRequest = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/requests/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete request');

            setRequests(prev => prev.filter(r => r.id !== id));
        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/requests');
                if (!response.ok) {
                    throw new Error('Error loading requests');
                }
                const data = await response.json();
                setRequests(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRequests();
    }, []);

    return (
        <Layout>
            <div className="admin-container">
                <h1 className="admin-title">Admin Dashboard – Consultation Requests</h1>

                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}

                {!loading && !error && (
                    requests.length === 0 ? (
                        <p className="admin-empty">No requests found.</p>
                    ) : (
                        requests.map((req) => (
                            <div key={req.id} className="request-card">
                                <p><strong>Name:</strong> {req.name}</p>
                                <p><strong>Phone:</strong> {req.phone || '—'}</p>
                                <p><strong>Email:</strong> {req.email || '—'}</p>
                                {req.address && <p><strong>Address:</strong> {req.address}</p>}
                                {req.subject && <p><strong>Subject:</strong> {req.subject}</p>}
                                {req.message && <p><strong>Message:</strong> {req.message}</p>}
                                <p className="request-timestamp">
                                    Received: {req.createdAt ? new Date(req.createdAt).toLocaleString('en-US') : '—'}
                                </p>

                                {/* Status Selection */}
                                <label htmlFor={`status-select-${req.id}`}>Status: </label>
                                <select
                                    id={`status-select-${req.id}`}
                                    value={req.status || 'New'}
                                    onChange={(e) => updateStatus(req.id, e.target.value)}
                                    title="Select request status"
                                >
                                    <option value="New">New</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Processed">Processed</option>
                                    <option value="Completed">Completed</option>
                                </select>

                                {/* Delete Button */}
                                <button onClick={() => deleteRequest(req.id)} style={{ marginLeft: '10px' }}>
                                    Delete
                                </button>
                            </div>
                        ))
                    )
                )}
            </div>
        </Layout>
    );
};

export default AdminPage;