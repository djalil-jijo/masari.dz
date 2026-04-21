"use client";

import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info, User } from 'lucide-react';

export default function MessagesView() {
  const [activeChat, setActiveChat] = useState(1);

  const contacts = [
    { id: 1, name: "أحمد بن محمد", lastMsg: "متى موعد الجلسة القادمة؟", time: "10:30 ص", unread: 2, online: true },
    { id: 2, name: "سارة العلي", lastMsg: "شكراً لك على التوجيه", time: "أمس", unread: 0, online: false },
    { id: 3, name: "خالد العمودي", lastMsg: "لقد أرسلت الملف المطلوب", time: "8 أفريل", unread: 0, online: true },
    { id: 4, name: "نورة القحطاني", lastMsg: "هل يمكن تغيير الموعد؟", time: "7 أفريل", unread: 0, online: false },
  ];

  const messages = [
    { id: 1, text: "مرحباً يا أحمد، كيف يمكنني مساعدتك اليوم؟", sender: "me", time: "09:00 ص" },
    { id: 2, text: "أهلاً بك يا مستشار. كنت أود الاستفسار عن موعد الجلسة القادمة", sender: "them", time: "09:05 ص" },
    { id: 3, text: "موعدنا القادم سيكون يوم الخميس في تمام الساعة العاشرة صباحاً إن شاء الله", sender: "me", time: "09:10 ص" },
    { id: 4, text: "متى موعد الجلسة القادمة؟", sender: "them", time: "10:30 ص" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in h-[calc(100vh-10rem)]">
      <div className="glass-morphism rounded-3xl border border-white/40 dark:border-slate-800 shadow-sm overflow-hidden flex h-full">
        
        {/* Contacts Sidebar */}
        <div className="w-80 border-l border-indigo-100/10 dark:border-slate-800 flex flex-col bg-white/20 dark:bg-slate-900/40">
          <div className="p-6 border-b border-indigo-100/10 dark:border-slate-800">
             <h2 className="text-xl font-bold text-slate-950 dark:text-white mb-4">الرسائل</h2>
             <div className="relative">
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="بحث عن طالب..."
                  className="w-full pr-10 pl-4 py-2 glass-morphism border border-indigo-100/10 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-600/20 outline-none"
                />
             </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
             {contacts.map((contact) => (
               <div 
                 key={contact.id}
                 onClick={() => setActiveChat(contact.id)}
                 className={`p-4 flex items-center gap-4 cursor-pointer transition-all border-b border-indigo-100/5 dark:border-slate-800/50 ${activeChat === contact.id ? 'bg-indigo-500/10 dark:bg-indigo-900/20' : 'hover:bg-white/40 dark:hover:bg-slate-800/30'}`}
               >
                 <div className="relative">
                    <div className="w-12 h-12 bg-white/50 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-400 border border-indigo-100/20">
                       {contact.name[0]}
                    </div>
                    {contact.online && <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>}
                 </div>
                 <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-sm font-bold text-slate-950 dark:text-white truncate">{contact.name}</span>
                       <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold">{contact.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <p className="text-xs text-slate-700 dark:text-slate-400 font-medium truncate">{contact.lastMsg}</p>
                       {contact.unread > 0 && (
                         <span className="w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                           {contact.unread}
                         </span>
                       )}
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white/40 dark:bg-slate-950/20">
           {/* Chat Header */}
           <div className="p-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center font-bold text-indigo-600">
                    {contacts.find(c => c.id === activeChat)?.name[0]}
                 </div>
                 <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{contacts.find(c => c.id === activeChat)?.name}</h3>
                    <span className="text-[10px] text-green-500 font-bold">نشط الآن</span>
                 </div>
              </div>
              <div className="flex items-center gap-2">
                 <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"><Phone size={18} /></button>
                 <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"><Video size={18} /></button>
                 <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"><Info size={18} /></button>
              </div>
           </div>

           {/* Messages Scroll */}
           <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-md p-4 rounded-3xl text-sm shadow-sm ${msg.sender === 'me' ? 'bg-indigo-600 text-white rounded-bl-none' : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800 rounded-br-none'}`}>
                      <p>{msg.text}</p>
                      <div className={`text-[10px] mt-2 font-bold ${msg.sender === 'me' ? 'text-indigo-200 text-left' : 'text-slate-400 text-right'}`}>
                         {msg.time}
                      </div>
                   </div>
                </div>
              ))}
           </div>

           {/* Chat Input */}
           <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                 <button className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
                    <Paperclip size={20} />
                 </button>
                 <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full pr-4 pl-12 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-600/20 outline-none"
                    />
                    <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all">
                       <Send size={18} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
