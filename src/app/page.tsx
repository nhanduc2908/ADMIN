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

const operations = [
  { id: 1, name: "Quản lý người dùng", icon: Users },
  { id: 2, name: "Quản lý quyền", icon: Key },
  { id: 3, name: "Quản lý vai trò", icon: Shield },
  { id: 4, name: "Giám sát hệ thống", icon: Activity },
  { id: 5, name: "Cảnh báo an ninh", icon: AlertTriangle },
  { id: 6, name: "Kiểm tra bảo mật", icon: FileCheck },
  { id: 7, name: "Cấu hình hệ thống", icon: Settings },
];

const functions = [
  { id: 1, name: "Đăng nhập/Đăng xuất", icon: LogOut },
  { id: 2, name: "Xác thực người dùng", icon: Lock },
  { id: 3, name: "Phân quyền truy cập", icon: Key },
  { id: 4, name: "Quản lý phiên làm việc", icon: Activity },
  { id: 5, name: "Theo dõi đăng nhập", icon: Eye },
  { id: 6, name: "Thông báo bảo mật", icon: Bell },
  { id: 7, name: "Tìm kiếm nhật ký", icon: Search },
  { id: 8, name: "Quản lý cơ sở dữ liệu", icon: Database },
  { id: 9, name: "Quản lý mạng", icon: Network },
  { id: 10, name: "Quản lý máy chủ", icon: Server },
  { id: 11, name: "Báo cáo an ninh", icon: FileCheck },
  { id: 12, name: "Cấu hình firewall", icon: Shield },
  { id: 13, name: "Cài đặt hệ thống", icon: Settings },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeOperation, setActiveOperation] = useState(1);
  const [activeFunction, setActiveFunction] = useState(1);

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
          <div className="px-4 mb-4">
            {sidebarOpen && (
              <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Thao tác
              </h2>
            )}
            <div className="space-y-1">
              {operations.map((op) => (
                <button
                  key={op.id}
                  onClick={() => setActiveOperation(op.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    activeOperation === op.id
                      ? 'bg-emerald-600 text-white'
                      : 'text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  <op.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span className="text-sm font-medium truncate">{op.name}</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 mt-6">
            {sidebarOpen && (
              <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Chức năng
              </h2>
            )}
            <div className="space-y-1">
              {functions.map((func) => (
                <button
                  key={func.id}
                  onClick={() => setActiveFunction(func.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    activeFunction === func.id
                      ? 'bg-blue-600 text-white'
                      : 'text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  <func.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span className="text-sm font-medium truncate">{func.name}</span>}
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
              {operations.find(o => o.id === activeOperation)?.name}
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