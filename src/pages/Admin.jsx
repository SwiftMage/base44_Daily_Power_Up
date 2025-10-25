import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/api/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Download, Copy, Search, Lock, LogOut, Mail, Calendar, Users } from "lucide-react";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedEmail, setCopiedEmail] = useState("");

  // Check if already authenticated in session
  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchEmails();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (password === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setError("");
      fetchEmails();
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
    setEmails([]);
    setPassword("");
  };

  const fetchEmails = async () => {
    setLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from('email_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setEmails(data || []);
    } catch (err) {
      console.error('Error fetching emails:', err);
      setError("Failed to fetch emails");
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Email', 'Signup Date'],
      ...emails.map(item => [
        item.email,
        new Date(item.created_at).toLocaleString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-signups-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(""), 2000);
  };

  const filteredEmails = emails.filter(item =>
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-12 max-w-md w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">Admin Access</h1>
            <p className="text-center text-gray-600 mb-8">Enter password to view email signups</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-3 text-lg rounded-xl border-2 border-blue-200 focus:border-blue-400"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-red-600 text-center text-sm">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Login
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Email Signups Dashboard</h1>
              <p className="text-gray-600">Manage and export your email subscribers</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-2 border-red-500 text-red-600 hover:bg-red-50 px-6 py-3 rounded-xl"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Total Signups</p>
                  <p className="text-4xl font-bold">{emails.length}</p>
                </div>
                <Users className="w-12 h-12 text-blue-200" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm mb-1">Latest Signup</p>
                  <p className="text-lg font-semibold">
                    {emails.length > 0
                      ? new Date(emails[0].created_at).toLocaleDateString()
                      : 'N/A'
                    }
                  </p>
                </div>
                <Calendar className="w-12 h-12 text-purple-200" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100 text-sm mb-1">Filtered Results</p>
                  <p className="text-4xl font-bold">{filteredEmails.length}</p>
                </div>
                <Mail className="w-12 h-12 text-pink-200" />
              </div>
            </Card>
          </div>

          {/* Search and Export */}
          <Card className="p-6 rounded-2xl shadow-lg mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search emails..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 w-full"
                />
              </div>
              <Button
                onClick={exportToCSV}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={emails.length === 0}
              >
                <Download className="w-5 h-5 mr-2" />
                Export to CSV
              </Button>
              <Button
                onClick={fetchEmails}
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Refresh'}
              </Button>
            </div>
          </Card>

          {/* Email List */}
          <Card className="p-6 rounded-2xl shadow-lg">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                <p className="text-gray-600 mt-4">Loading emails...</p>
              </div>
            ) : filteredEmails.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  {searchTerm ? 'No emails match your search' : 'No email signups yet'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-700 font-semibold">#</th>
                      <th className="text-left py-4 px-4 text-gray-700 font-semibold">Email Address</th>
                      <th className="text-left py-4 px-4 text-gray-700 font-semibold">Signup Date</th>
                      <th className="text-right py-4 px-4 text-gray-700 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmails.map((item, index) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                      >
                        <td className="py-4 px-4 text-gray-600">{index + 1}</td>
                        <td className="py-4 px-4">
                          <span className="text-gray-900 font-medium">{item.email}</span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">
                          {new Date(item.created_at).toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Button
                            onClick={() => copyToClipboard(item.email)}
                            variant="outline"
                            size="sm"
                            className="border border-gray-300 hover:bg-gray-100 px-3 py-2 rounded-lg"
                          >
                            <Copy className="w-4 h-4 mr-1" />
                            {copiedEmail === item.email ? 'Copied!' : 'Copy'}
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
