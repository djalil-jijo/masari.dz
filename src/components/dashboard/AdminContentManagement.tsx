"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Edit2, 
  Trash2, 
  Eye, 
  Globe, 
  Lock,
  MoreVertical,
  Image as ImageIcon,
  Link as LinkIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

const initialContentItems = [
  { id: 1, title: "كيف تختار تخصصك الجامعي؟", category: "مقالات", date: "2024-04-10", status: "Published", author: "د. أحمد", views: 1240 },
  { id: 2, title: "أهمية مقياس هولاند في التوجيه", category: "أدلة مهنية", date: "2024-04-08", status: "Published", author: "أ. سارة", views: 856 },
  { id: 3, title: "إعلان: فتح باب التسجيل للمقياس الجماعي", category: "إعلانات", date: "2024-04-12", status: "Draft", author: "المدير", views: 0 },
  { id: 4, title: "فهم السمات الشخصية الخمس الكبرى", category: "مقالات", date: "2024-04-05", status: "Published", author: "د. كريم", views: 2100 },
];

export default function AdminContentManagement() {
  const [filter, setFilter] = useState('All');
  const [items, setItems] = useState<any[]>(initialContentItems);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('مقالات');

  useEffect(() => {
    const saved = localStorage.getItem('admin_content_items');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved items", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('admin_content_items', JSON.stringify(items));
  }, [items]);

  const filteredItems = items.filter(item => filter === 'All' || filter === 'الكل' || item.category === filter);

  const handleSave = () => {
    if (!formTitle.trim()) return;

    if (isAddModalOpen) {
      const newItem = {
        id: Date.now(),
        title: formTitle,
        category: formCategory,
        date: new Date().toISOString().split('T')[0],
        status: "Published",
        author: "الإدارة",
        views: 0
      };
      setItems([newItem, ...items]);
    } else if (isEditModalOpen && selectedItem) {
      setItems(items.map(item => 
        item.id === selectedItem.id 
          ? { ...item, title: formTitle, category: formCategory }
          : item
      ));
    }

    closeModal();
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedItem(null);
    setFormTitle('');
    setFormCategory('مقالات');
  };

  const openEditModal = (item: any) => {
    setSelectedItem(item);
    setFormTitle(item.title);
    setFormCategory(item.category);
    setIsEditModalOpen(true);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-primary-950 ">إدارة المحتوى والإعلانات</h2>
          <p className="text-slate-700  font-medium">إدارة المقالات، الأدلة الإرشادية، والتنبيهات العامة للمنصة</p>
        </div>
        <button onClick={() => { setFormTitle(''); setFormCategory('مقالات'); setIsAddModalOpen(true); }} className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-2xl font-bold shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all hover:scale-105 active:scale-95">
          <Plus size={20} />
          إضافة محتوى جديد
        </button>
      </div>

      {/* Tabs & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-100/20 pb-4">
        <div className="flex items-center gap-1 bg-white/60  p-1 rounded-xl glass-morphism">
          {['الكل', 'مقالات', 'أدلة مهنية', 'إعلانات'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === tab || (tab === 'الكل' && filter === 'All') ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600  hover:bg-white/50'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="البحث في العناوين..."
              className="pr-10 pl-4 py-2.5 rounded-xl glass-morphism border border-indigo-100/20 outline-none focus:border-primary-600 transition-all text-sm w-64 text-primary-950 font-medium"
            />
          </div>
          <button className="p-2.5 glass-morphism border border-indigo-100/20 rounded-xl text-slate-600 hover:text-primary-600 transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-morphism p-5 rounded-3xl border border-white/40 hover:border-primary-200 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100  text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                {item.category === 'إعلانات' ? <Globe size={24} /> : <FileText size={24} />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-950  group-hover:text-primary-600 transition-colors">{item.title}</h3>
                <div className="flex items-center gap-4 mt-1 text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1"><Edit2 size={12} /> {item.author}</span>
                  <span className="flex items-center gap-1"><Eye size={12} /> {item.views} مشاهدة</span>
                  <span className="bg-primary-50  px-2 py-0.5 rounded text-primary-600">{item.category}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
              <div className="flex flex-col items-end">
                <div className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">تاريخ النشر</div>
                <div className="text-sm font-bold text-slate-700 ">{item.date}</div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${item.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                  {item.status === 'Published' ? <Globe size={12} /> : <Lock size={12} />}
                  {item.status === 'Published' ? 'منشور' : 'مسودة'}
                </span>
                
                <div className="h-8 w-[1px] bg-indigo-100/20 mx-2 hidden md:block"></div>

                <div className="flex items-center gap-1">
                  <button onClick={() => openEditModal(item)} className="p-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="تعديل">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => setItems(prev => prev.filter(i => i.id !== item.id))} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="حذف">
                    <Trash2 size={18} />
                  </button>
                  <button className="p-2 text-slate-500 hover:text-slate-600 rounded-lg transition-all">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-morphism p-6 rounded-3xl border border-green-100/20 bg-green-50/10">
           <div className="text-slate-500 text-xs font-bold mb-2">إجمالي المقالات</div>
           <div className="text-2xl font-bold text-primary-950 ">{items.filter(i => i.category === 'مقالات').length} مقالاً</div>
           <div className="text-[10px] text-green-500 font-bold mt-2">محفوظ محلياً</div>
        </div>
        <div className="glass-morphism p-6 rounded-3xl border border-blue-100/20 bg-blue-50/10">
           <div className="text-slate-500 text-xs font-bold mb-2">إجمالي الأدلة</div>
           <div className="text-2xl font-bold text-primary-950 ">{items.filter(i => i.category === 'أدلة مهنية').length} أدلة</div>
           <div className="text-[10px] text-blue-500 font-bold mt-2">محفوظ محلياً</div>
        </div>
        <div className="glass-morphism p-6 rounded-3xl border border-indigo-100/20 bg-indigo-50/10">
           <div className="text-slate-500 text-xs font-bold mb-2">إعلانات نشطة</div>
           <div className="text-2xl font-bold text-primary-950 ">{items.filter(i => i.category === 'إعلانات').length} إعلانات</div>
           <div className="text-[10px] text-indigo-500 font-bold mt-2">محفوظ محلياً</div>
        </div>
      </div>

      {/* Modals */}
      {(isAddModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-morphism w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-6 text-right">
             <h3 className="text-xl font-bold text-slate-900 mb-6">
                {isAddModalOpen ? 'إضافة محتوى جديد' : 'تعديل المحتوى'}
             </h3>
             <div className="space-y-4 font-arabic">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">العنوان</label>
                   <input 
                     type="text" 
                     value={formTitle}
                     onChange={(e) => setFormTitle(e.target.value)}
                     className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm" 
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">التصنيف</label>
                   <select 
                     value={formCategory}
                     onChange={(e) => setFormCategory(e.target.value)}
                     className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm"
                   >
                      <option>مقالات</option>
                      <option>أدلة مهنية</option>
                      <option>إعلانات</option>
                   </select>
                </div>
                <div className="pt-4 flex items-center gap-3">
                   <button 
                     onClick={handleSave}
                     className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                   >
                     حفظ
                   </button>
                   <button 
                     onClick={closeModal}
                     className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                   >
                     إلغاء
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

