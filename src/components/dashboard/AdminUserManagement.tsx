"use client";

import React, { useState } from 'react';
import { 
  Search, Filter, Plus, MoreVertical, Edit2, Trash2, 
  CheckCircle2, XCircle, Shield, User as UserIcon, GraduationCap, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Role = 'ADMIN' | 'COUNSELOR' | 'STUDENT';
type Status = 'ACTIVE' | 'SUSPENDED';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
  joinDate: string;
  school?: string;
}

const mockUsers: UserData[] = [
  { id: '1', name: 'أحمد الطالب', email: 'ahmed@student.com', role: 'STUDENT', status: 'ACTIVE', joinDate: '2023-09-01', school: 'ثانوية الأمل' },
  { id: '2', name: 'جابر العتيبي', email: 'jaber@student.com', role: 'STUDENT', status: 'ACTIVE', joinDate: '2023-09-15', school: 'ثانوية المجد' },
  { id: '3', name: 'المستشار التربوي', email: 'counselor@masari.com', role: 'COUNSELOR', status: 'ACTIVE', joinDate: '2023-08-10' },
  { id: '4', name: 'سارة خالد', email: 'sara@counselor.com', role: 'COUNSELOR', status: 'SUSPENDED', joinDate: '2023-08-12' },
  { id: '5', name: 'مدير النظام', email: 'admin@masari.com', role: 'ADMIN', status: 'ACTIVE', joinDate: '2023-01-01' },
];

export default function AdminUserManagement() {
  const [users, setUsers] = useState<UserData[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<Role | 'ALL'>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New user state
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState<Role>('STUDENT');

  const filteredUsers = users.filter(usr => {
    const matchesSearch = usr.name.includes(searchQuery) || usr.email.includes(searchQuery);
    const matchesRole = filterRole === 'ALL' || usr.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const toggleStatus = (id: string) => {
    setUsers(prev => prev.map(u => 
      u.id === id ? { ...u, status: u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE' } : u
    ));
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail) return;

    const newUser: UserData = {
      id: Math.random().toString(),
      name: newName,
      email: newEmail,
      role: newRole,
      status: 'ACTIVE',
      joinDate: new Date().toISOString().split('T')[0]
    };

    setUsers([...users, newUser]);
    setIsModalOpen(false);
    setNewName('');
    setNewEmail('');
  };

  const getRoleBadge = (role: Role) => {
    switch(role) {
      case 'ADMIN': return <span className="flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-bold border border-red-100"><Shield size={12}/> مدير</span>;
      case 'COUNSELOR': return <span className="flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-600 rounded-lg text-xs font-bold border border-primary-100"><UserIcon size={12}/> مستشار</span>;
      case 'STUDENT': return <span className="flex items-center gap-1 px-2.5 py-1 bg-secondary-50 text-secondary-600 rounded-lg text-xs font-bold border border-secondary-100"><GraduationCap size={12}/> طالب</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-morphism p-6 rounded-3xl">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="ابحث بالاسم أو البريد..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 glass-morphism border border-indigo-100/20 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm font-bold text-primary-950"
            />
          </div>
          <div className="relative">
             <select 
               value={filterRole}
               onChange={(e) => setFilterRole(e.target.value as Role | 'ALL')}
               className="pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm font-medium appearance-none"
             >
               <option value="ALL">جميع الصلاحيات</option>
               <option value="ADMIN">المديرين</option>
               <option value="COUNSELOR">المستشارين</option>
               <option value="STUDENT">الطلاب</option>
             </select>
             <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:scale-[1.02] active:scale-95 transition-all w-full md:w-auto justify-center"
        >
          <Plus size={18} />
          إضافة مستخدم
        </button>
      </div>

      {/* Users Table */}
      <div className="glass-morphism rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-white/40 dark:bg-slate-800/50 border-b border-indigo-100/20">
                <th className="p-4 text-xs font-bold text-slate-700 uppercase tracking-wider">المستخدم</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">الدور أو الصلاحية</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">الحالة</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">تاريخ الانضمام</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <AnimatePresence>
                {filteredUsers.map((user) => (
                  <motion.tr 
                    key={user.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="hover:bg-white/60 dark:hover:bg-slate-800/50 transition-colors group border-b border-indigo-100/10"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-primary-950 dark:text-white text-sm">{user.name}</div>
                          <div className="text-xs text-slate-600 font-medium">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{getRoleBadge(user.role)}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                        user.status === 'ACTIVE' 
                          ? 'bg-green-50 text-green-600 border-green-100' 
                          : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                      }`}>
                        {user.status === 'ACTIVE' ? <CheckCircle2 size={12}/> : <XCircle size={12}/>}
                        {user.status === 'ACTIVE' ? 'نشط' : 'موقوف'}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{user.joinDate}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 bg-slate-50 dark:bg-slate-800 rounded-lg transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => toggleStatus(user.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            user.status === 'ACTIVE' 
                              ? 'text-slate-400 hover:text-amber-600 bg-slate-50 dark:bg-slate-800 hover:bg-amber-50' 
                              : 'text-slate-400 hover:text-green-600 bg-slate-50 dark:bg-slate-800 hover:bg-green-50'
                          }`}
                          title={user.status === 'ACTIVE' ? 'إيقاف الحساب' : 'تفعيل الحساب'}
                        >
                          {user.status === 'ACTIVE' ? <XCircle size={16} /> : <CheckCircle2 size={16} />}
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 bg-slate-50 dark:bg-slate-800 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredUsers.length === 0 && (
            <div className="p-8 text-center text-slate-500 font-medium">
              لا يوجد مستخدمين يطابقون بحثك.
            </div>
          )}
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-morphism w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/40"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
               <h3 className="text-lg font-bold text-slate-900 dark:text-white">إضافة مستخدم جديد</h3>
               <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                 <X size={20} />
               </button>
            </div>
            
            <form onSubmit={handleAddUser} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">اسم المستخدم المكتمل</label>
                <input 
                  type="text" 
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm"
                  placeholder="مثال: محمد عبد الله"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">الدور (الصلاحية)</label>
                <select 
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as Role)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm"
                >
                  <option value="ADMIN">مدير نظام</option>
                  <option value="COUNSELOR">مستشار تربوي</option>
                  <option value="STUDENT">طالب</option>
                </select>
              </div>

              <div className="pt-4 flex items-center gap-3">
                 <button 
                   type="submit" 
                   className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold border border-transparent hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                 >
                   إنشاء الحساب
                 </button>
                 <button 
                   type="button" 
                   onClick={() => setIsModalOpen(false)}
                   className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                 >
                   إلغاء
                 </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
