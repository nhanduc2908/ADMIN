"use client";

import { 
  Shield, 
  Lock, 
  Key, 
  Users, 
  Activity, 
  AlertTriangle, 
  FileCheck, 
  Settings, 
  Database, 
  Network, 
  Server, 
  Eye, 
  Bell, 
  Search, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { id: 1, name: "Tổng quan", icon: Activity, badge: null },
  { id: 2, name: "Đánh giá", icon: FileCheck, badge: null },
  { id: 3, name: "Quét website", icon: Network, badge: null },
  { id: 4, name: "Quản lý file", icon: Database, badge: null },
  { id: 5, name: "Nhập dữ liệu", icon: Server, badge: null },
  { id: 6, name: "Tuân thủ", icon: Shield, badge: null },
  { id: 7, name: "Mối đe dọa", icon: AlertTriangle, badge: 8 },
  { id: 8, name: "Đào tạo", icon: Users, badge: null },
  { id: 9, name: "Thiết bị", icon: Lock, badge: null },
  { id: 10, name: "Thông báo", icon: Bell, badge: 6 },
  { id: 11, name: "Báo cáo", icon: FileCheck, badge: null },
  { id: 12, name: "So sánh", icon: Eye, badge: null },
  { id: 13, name: "Cài đặt", icon: Settings, badge: null },
  { id: 14, name: "Trợ giúp", icon: Search, badge: null },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <div className="min-h-screen bg-neutral-900 flex">
      <aside 
        className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-neutral-800 border-r border-neutral-700 transition-all duration-300 flex flex-col`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-700">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-white font-bold text-lg">Security</span>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    activeMenu === item.id
                      ? 'bg-emerald-600 text-white'
                      : 'text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && <span className="text-sm font-medium truncate">{item.name}</span>}
                  </div>
                  {sidebarOpen && item.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold text-white">
              {menuItems.find(m => m.id === activeMenu)?.name}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-sm font-medium">Hệ thống hoạt động</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-neutral-400" />
            </div>
          </div>
        </header>

        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Người dùng hoạt động", value: "1,247", icon: Users, color: "blue" },
              { label: "Cảnh báo bảo mật", value: "12", icon: AlertTriangle, color: "red" },
              { label: "Phiên đang hoạt động", value: "89", icon: Activity, color: "emerald" },
              { label: "Kiểm tra thành công", value: "98.5%", icon: FileCheck, color: "purple" },
            ].map((stat, i) => (
              <div key={i} className="bg-neutral-800 border border-neutral-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-500' :
                    stat.color === 'red' ? 'text-red-500' :
                    stat.color === 'emerald' ? 'text-emerald-500' :
                    'text-purple-500'
                  }`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Hoạt động gần đây</h2>
            <div className="space-y-3">
              {[
                { time: "21:55:32", action: "Đăng nhập thành công", user: "admin@security.vn", status: "success" },
                { time: "21:54:18", action: "Cập nhật quyền người dùng", user: "security@admin.vn", status: "success" },
                { time: "21:53:05", action: "Phát hiện truy cập bất thường", user: "192.168.1.105", status: "warning" },
                { time: "21:52:41", action: "Đăng xuất hệ thống", user: "user@company.vn", status: "success" },
                { time: "21:51:29", action: "Thất bại đăng nhập", user: "unknown@ip", status: "error" },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-neutral-700 last:border-0">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-neutral-500 font-mono">{log.time}</span>
                    <span className="text-white">{log.action}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">{log.user}</span>
                    <span className={`w-2 h-2 rounded-full ${
                      log.status === 'success' ? 'bg-emerald-500' :
                      log.status === 'warning' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}