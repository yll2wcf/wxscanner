/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  ChevronLeft, 
  MoreHorizontal, 
  Circle, 
  PlusCircle, 
  FolderOpen, 
  User, 
  Home as HomeIcon,
  RotateCw,
  Sparkles,
  ArrowRight,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  Verified,
  HelpCircle,
  Settings,
  LogOut,
  X
} from 'lucide-react';

// --- Types ---

type Screen = 'home' | 'camera' | 'crop' | 'enhance' | 'create' | 'profile';

interface NavigationProps {
  onNavigate: (screen: Screen, direction?: 'push' | 'pop' | 'slide_up' | 'none') => void;
}

// --- Components ---

const WeChatCapsule = () => (
  <div className="flex items-center gap-3 px-3 py-1 rounded-full h-8 border border-black/10 bg-white/60 backdrop-blur-md">
    <MoreHorizontal className="w-4 h-4 text-[#161d16]" />
    <div className="w-[1px] h-3.5 bg-black/10"></div>
    <div className="w-4 h-4 rounded-full border-2 border-[#161d16] flex items-center justify-center p-[0.5px]">
      <div className="w-full h-full rounded-full bg-[#161d16]"></div>
    </div>
  </div>
);

const StatusBar = ({ dark = false }: { dark?: boolean }) => (
  <div className={`h-11 w-full flex items-center px-6 justify-between overflow-hidden ${dark ? 'text-white' : 'text-[#161d16]'}`}>
    <div className="text-[14px] font-semibold">08:54</div>
    <div className="flex items-center gap-1.5 scale-90">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map(i => <div key={i} className={`w-1 h-3 rounded-full ${i <= 3 ? (dark ? 'bg-white' : 'bg-black') : (dark ? 'bg-white/30' : 'bg-black/10')}`} />)}
      </div>
      <div className="w-4 h-4 border-2 border-current rounded-sm flex items-center justify-center">
        <div className="w-2 h-2 bg-current rounded-full" />
      </div>
      <div className="w-6 h-3 border border-current rounded-sm relative">
        <div className="absolute inset-0.5 bg-current w-1/4" />
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-current rounded-full" />
      </div>
    </div>
  </div>
);

const Home = ({ onNavigate }: NavigationProps) => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <StatusBar />
        <div className="relative flex items-center justify-between px-4 h-11 w-full max-w-7xl mx-auto">
          <div className="w-20" />
          <h1 className="font-headline font-semibold text-base tracking-tight text-[#161d16]">扫描助手</h1>
          <WeChatCapsule />
        </div>
      </nav>

      <main className="px-6 py-4 max-w-7xl mx-auto space-y-8">
        <header className="space-y-2 pt-2">
          <div className="flex items-baseline justify-between">
            <span className="font-headline text-[2.75rem] font-bold text-primary leading-tight">24</span>
            <span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full text-xs font-semibold">本月新增</span>
          </div>
          <h2 className="font-headline text-on-surface-variant text-sm font-medium tracking-wide uppercase">已归档文档总计</h2>
        </header>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button className="bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">全部文件</button>
          <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">PDF 导出</button>
          <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">最近扫描</button>
          <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">会议记录</button>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: '2024年度合作协议总则', date: '昨天 14:30', size: '1.2 MB', type: 'PDF', img: 'https://picsum.photos/seed/doc1/800/600' },
            { title: '产品研发头脑风暴笔记', date: '10月24日', size: '456 KB', type: 'IMG', img: 'https://picsum.photos/seed/doc2/800/600' },
            { title: '上海出差餐费发票', date: '10月22日', size: '890 KB', type: 'PDF', img: 'https://picsum.photos/seed/doc3/800/600' },
          ].map((doc, i) => (
            <div key={i} className="group bg-white p-4 rounded-xl shadow-sm flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover" src={doc.img} alt={doc.title} referrerPolicy="no-referrer" />
                <div className="absolute top-3 right-3 glass-effect bg-white/60 px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">{doc.type}</div>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-on-surface text-lg truncate">{doc.title}</h3>
                <p className="text-on-surface-variant/60 text-xs">{doc.date} • {doc.size}</p>
              </div>
            </div>
          ))}
          <div className="group bg-surface-container-low border-2 border-dashed border-outline-variant/30 p-4 rounded-xl flex flex-col items-center justify-center gap-3 min-h-[200px]">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant/40">
              <PlusCircle className="w-8 h-8" />
            </div>
            <p className="text-on-surface-variant/60 text-sm font-medium">创建新文件夹</p>
          </div>
        </section>
      </main>

      <button 
        onClick={() => onNavigate('create', 'slide_up')}
        className="fixed bottom-24 right-6 z-50 group flex flex-col items-center"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary-container/40 rounded-full scale-125 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary rounded-full shadow-lg flex items-center justify-center transition-transform group-active:scale-90">
            <Camera className="w-8 h-8 text-white" />
          </div>
        </div>
      </button>

      <nav className="fixed bottom-0 w-full z-50 pb-safe bg-white/80 backdrop-blur-xl shadow-lg border-t border-black/5">
        <div className="flex justify-around items-center h-20 px-8 w-full">
          <button className="flex flex-col items-center justify-center text-primary-container scale-110">
            <HomeIcon className="w-6 h-6" />
            <span className="text-[10px] font-medium mt-1">首页</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant/40">
            <FolderOpen className="w-6 h-6" />
            <span className="text-[10px] font-medium mt-1">文档</span>
          </button>
          <button onClick={() => onNavigate('profile', 'none')} className="flex flex-col items-center justify-center text-on-surface-variant/40">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium mt-1">个人中心</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

const CameraScreen = ({ onNavigate }: NavigationProps) => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col">
      <header className="w-full absolute top-0 z-50 bg-black/20 backdrop-blur-md">
        <StatusBar dark />
        <div className="relative h-[44px] w-full flex items-center px-4">
          <div className="flex items-center w-20">
            <button onClick={() => onNavigate('home', 'pop')} className="text-white p-1">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <h1 className="font-headline font-semibold text-[17px] tracking-tight text-white">正在扫描</h1>
          </div>
          <div className="ml-auto">
            <WeChatCapsule />
          </div>
        </div>
      </header>

      <main className="flex-1 relative flex items-center justify-center">
        <img 
          src="https://picsum.photos/seed/scan/1200/1600" 
          alt="Camera feed" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] brightness-[0.7]"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 w-[85%] h-[60%] max-w-md border-2 border-primary-container/40 rounded-lg">
          <div className="absolute inset-0 bg-primary-container/5 rounded-lg"></div>
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-primary-container rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-primary-container rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-primary-container rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-primary-container rounded-br-lg"></div>
          
          <div className="absolute -bottom-16 left-0 w-full text-center">
            <p className="text-sm font-medium text-white bg-black/40 backdrop-blur-sm inline-block px-4 py-1.5 rounded-full">
              请对准文档边缘
            </p>
          </div>
        </div>

        <div className="absolute top-28 left-6 z-20 pointer-events-none opacity-40 text-[10px] font-mono text-primary-container flex flex-col gap-1">
          <span>DETECTION_ACTIVE: 1</span>
          <span>FPS: 60.0</span>
          <span>ISO: 400</span>
        </div>
      </main>

      <footer className="h-32 w-full bg-black/40 backdrop-blur-2xl flex items-center justify-between px-10 pb-safe">
        <button className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-[11px] font-medium text-white/80 tracking-wider">相册导入</span>
        </button>

        <button 
          onClick={() => onNavigate('crop', 'push')}
          className="relative flex items-center justify-center group"
        >
          <div className="w-20 h-20 rounded-full border-4 border-primary-container/40 absolute scale-110 group-active:scale-100 transition-transform"></div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-container to-primary flex items-center justify-center shadow-lg group-active:scale-90 transition-transform">
            <div className="w-14 h-14 rounded-full border border-white/20"></div>
          </div>
        </button>

        <button className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <span className="text-[11px] font-medium text-white/80 tracking-wider">单页模式</span>
        </button>
      </footer>
    </div>
  );
};

const CropScreen = ({ onNavigate }: NavigationProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <StatusBar />
        <div className="relative flex items-center h-12 w-full px-4">
          <button onClick={() => onNavigate('camera', 'pop')} className="absolute left-4 text-primary p-1">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 flex justify-center">
            <h1 className="font-headline font-semibold text-base tracking-tight text-[#161d16]">剪裁调整</h1>
          </div>
          <div className="absolute right-4">
            <WeChatCapsule />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
        <div className="relative w-full max-w-md aspect-[3/4] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl p-4">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img 
              src="https://picsum.photos/seed/crop/800/1200" 
              alt="Crop preview" 
              className="w-full h-full object-cover opacity-90 scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-[10%] border-2 border-primary-container bg-transparent">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-30">
                {[...Array(9)].map((_, i) => <div key={i} className="border border-white/50" />)}
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary-container border-2 border-white rounded-full shadow-md"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary-container border-2 border-white rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary-container border-2 border-white rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary-container border-2 border-white rounded-full shadow-md"></div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center p-6 bg-surface-container-highest rounded-xl active:scale-95 transition-all">
            <RotateCw className="w-8 h-8 text-primary mb-2" />
            <span className="text-on-surface-variant text-sm font-semibold">旋转</span>
          </button>
          <button className="flex flex-col items-center justify-center p-6 bg-primary-container text-white rounded-xl active:scale-95 transition-all shadow-lg shadow-primary-container/20">
            <Sparkles className="w-8 h-8 mb-2" />
            <span className="text-sm font-semibold">自动边缘检测</span>
          </button>
        </div>
      </main>

      <div className="sticky bottom-0 w-full bg-white/80 backdrop-blur-xl z-50 pb-safe">
        <div className="flex justify-between items-center h-24 px-8 w-full max-w-2xl mx-auto">
          <button onClick={() => onNavigate('camera', 'pop')} className="px-8 py-3 text-secondary font-semibold">
            重新拍摄
          </button>
          <button 
            onClick={() => onNavigate('enhance', 'push')}
            className="flex items-center gap-2 px-10 py-4 bg-gradient-to-br from-primary-container to-primary text-white font-bold rounded-full shadow-xl shadow-primary/30 active:scale-95 transition-all"
          >
            <span>下一步</span>
            <ChevronLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

const EnhanceScreen = ({ onNavigate }: NavigationProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <StatusBar />
        <div className="relative flex items-center h-11 px-4 w-full">
          <button onClick={() => onNavigate('crop', 'pop')} className="text-[#161d16] p-1">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="font-headline font-semibold text-[17px] text-[#161d16]">效果增强</h1>
          </div>
          <div className="ml-auto">
            <WeChatCapsule />
          </div>
        </div>
      </header>

      <div className="fixed top-[88px] left-0 right-0 z-50 flex justify-end px-6 h-12 pointer-events-none">
        <button 
          onClick={() => onNavigate('home', 'pop')}
          className="pointer-events-auto bg-primary text-on-primary px-5 py-1.5 rounded-full font-medium text-sm transition-all active:scale-95 shadow-lg h-fit"
        >
          完成
        </button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 pt-[120px] pb-32">
        <div className="w-full text-left mb-8">
          <span className="font-headline text-primary font-bold text-4xl block">01</span>
          <span className="text-on-surface-variant text-sm tracking-widest uppercase">Page Processed</span>
        </div>

        <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-lg shadow-xl overflow-hidden border border-black/5">
          <img 
            src="https://picsum.photos/seed/enhance/800/1200" 
            alt="Enhanced document" 
            className="w-full h-full object-cover contrast-125 brightness-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40"></div>
        </div>
      </main>

      <section className="fixed bottom-0 left-0 right-0 z-40 bg-white rounded-t-xl shadow-2xl px-6 pt-3 pb-10">
        <div className="w-12 h-1 bg-outline-variant/30 rounded-full mx-auto mb-6"></div>
        <div className="flex items-end justify-between gap-4 overflow-x-auto pb-2 no-scrollbar">
          {[
            { name: '原图', img: 'https://picsum.photos/seed/f1/100/140', active: false },
            { name: '增强', img: 'https://picsum.photos/seed/f2/100/140', active: true },
            { name: '黑白', img: 'https://picsum.photos/seed/f3/100/140', active: false },
            { name: '灰度', img: 'https://picsum.photos/seed/f4/100/140', active: false },
          ].map((filter, i) => (
            <button key={i} className="flex flex-col items-center gap-3 min-w-[72px] group">
              <div className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${filter.active ? 'border-primary shadow-md scale-110' : 'border-transparent'}`}>
                <img src={filter.img} alt={filter.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                {filter.active && (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white fill-primary" />
                  </div>
                )}
              </div>
              <span className={`text-xs font-medium ${filter.active ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{filter.name}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50">
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-semibold shadow-xl transition-all active:scale-95 bg-gradient-to-br from-primary-container to-primary">
          <FileText className="w-4 h-4" />
          <span>导出 PDF</span>
        </button>
      </div>
    </div>
  );
};

const CreateModal = ({ onNavigate }: NavigationProps) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-end">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onNavigate('home', 'none')}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full bg-white rounded-t-[2rem] shadow-2xl px-6 pb-12 pt-4 flex flex-col items-center"
      >
        <div className="w-12 h-1.5 bg-outline-variant rounded-full mb-8"></div>
        <div className="w-full text-left mb-8">
          <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight">创建文档</h3>
          <p className="text-on-surface-variant mt-1">选择一种方式开始数字化您的档案</p>
        </div>

        <div className="w-full space-y-4">
          <button 
            onClick={() => onNavigate('camera', 'push')}
            className="w-full group bg-surface-container-low hover:bg-primary-container/10 transition-all rounded-2xl p-6 flex items-center gap-6 border border-transparent hover:border-primary-container/20"
          >
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white shadow-lg shadow-primary-container/20 group-active:scale-90 transition-transform">
              <Camera className="w-8 h-8" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-headline font-bold text-xl text-on-surface">相机拍摄</h4>
              <p className="text-on-surface-variant text-sm mt-0.5">智能边缘检测，高清文档扫描</p>
            </div>
            <ChevronLeft className="w-6 h-6 text-outline-variant rotate-180" />
          </button>

          <button className="w-full group bg-surface-container-low hover:bg-secondary-container/10 transition-all rounded-2xl p-6 flex items-center gap-6 border border-transparent hover:border-secondary-container/20">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container group-active:scale-90 transition-transform">
              <ImageIcon className="w-8 h-8" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-headline font-bold text-xl text-on-surface">相册导入</h4>
              <p className="text-on-surface-variant text-sm mt-0.5">从手机相册中选择已有照片</p>
            </div>
            <ChevronLeft className="w-6 h-6 text-outline-variant rotate-180" />
          </button>
        </div>

        <button 
          onClick={() => onNavigate('home', 'none')}
          className="mt-8 w-full py-4 font-headline font-semibold text-on-surface-variant hover:text-red-500 transition-colors"
        >
          取消
        </button>
      </motion.div>
    </div>
  );
};

const ProfileScreen = ({ onNavigate }: NavigationProps) => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <StatusBar />
        <div className="relative flex items-center justify-between px-4 h-11 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-primary-container" />
            <h1 className="font-headline font-semibold text-base text-[#161d16]">个人中心</h1>
          </div>
          <WeChatCapsule />
        </div>
      </header>

      <main className="px-6 py-4 space-y-8 max-w-2xl mx-auto">
        <section className="flex items-center gap-6 pt-4">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/user/200/200" 
              alt="User Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 bg-primary-container p-1.5 rounded-full border-2 border-surface">
              <Verified className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">林慕白</h2>
            <p className="text-on-surface-variant text-sm opacity-70">Premium 会员 • 2024年加入</p>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-6 rounded-xl space-y-2 border border-outline-variant/10">
            <span className="font-headline text-3xl font-bold text-primary">128</span>
            <p className="text-on-surface-variant text-xs uppercase tracking-wider">已生成 PDF</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-2 border border-outline-variant/10">
            <span className="font-headline text-3xl font-bold text-on-surface">1,402</span>
            <p className="text-on-surface-variant text-xs uppercase tracking-wider">累计扫描</p>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-primary to-primary-container text-white shadow-xl">
          <div className="relative z-10 flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="font-headline text-xl font-bold tracking-tight">VisionScan Pro</h3>
              <p className="text-white/80 text-sm">无限云端存储与 OCR 识别已开启</p>
            </div>
            <Verified className="w-10 h-10 opacity-40" />
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        </section>

        <section className="space-y-2">
          <h4 className="px-2 text-xs font-bold text-on-surface-variant/50 uppercase tracking-widest mb-4">账户管理</h4>
          <div className="space-y-1">
            {[
              { icon: FileText, label: '我的订阅' },
              { icon: HelpCircle, label: '帮助与反馈' },
              { icon: Settings, label: '设置' },
            ].map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl bg-white hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{item.label}</span>
                </div>
                <ChevronLeft className="w-5 h-5 text-outline-variant rotate-180" />
              </button>
            ))}
          </div>
        </section>

        <button className="w-full flex items-center justify-center gap-2 p-4 rounded-xl text-red-600 font-semibold hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>退出登录</span>
        </button>
      </main>

      <nav className="fixed bottom-0 w-full z-50 pb-safe bg-white/80 backdrop-blur-xl shadow-lg border-t border-black/5">
        <div className="flex justify-around items-center h-20 px-8 w-full">
          <button onClick={() => onNavigate('home', 'none')} className="flex flex-col items-center justify-center text-on-surface-variant/40">
            <HomeIcon className="w-6 h-6" />
            <span className="text-[10px] font-medium mt-1">首页</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant/40">
            <FolderOpen className="w-6 h-6" />
            <span className="text-[10px] font-medium mt-1">文档</span>
          </button>
          <button className="flex flex-col items-center justify-center text-primary-container scale-110">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium mt-1">个人中心</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [direction, setDirection] = useState<'push' | 'pop' | 'slide_up' | 'none'>('none');

  const handleNavigate = (screen: Screen, dir: 'push' | 'pop' | 'slide_up' | 'none' = 'none') => {
    setDirection(dir);
    setCurrentScreen(screen);
  };

  const variants = {
    push: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '-30%', opacity: 0 },
    },
    pop: {
      initial: { x: '-30%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '100%' },
    },
    slide_up: {
      initial: { y: '100%' },
      animate: { y: 0 },
      exit: { y: '100%' },
    },
    none: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    }
  };

  const currentVariants = variants[direction] || variants.none;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentScreen}
          initial={currentVariants.initial}
          animate={currentVariants.animate}
          exit={currentVariants.exit}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute inset-0 w-full h-full"
        >
          {currentScreen === 'home' && <Home onNavigate={handleNavigate} />}
          {currentScreen === 'camera' && <CameraScreen onNavigate={handleNavigate} />}
          {currentScreen === 'crop' && <CropScreen onNavigate={handleNavigate} />}
          {currentScreen === 'enhance' && <EnhanceScreen onNavigate={handleNavigate} />}
          {currentScreen === 'profile' && <ProfileScreen onNavigate={handleNavigate} />}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {currentScreen === 'create' && (
          <CreateModal onNavigate={handleNavigate} />
        )}
      </AnimatePresence>
    </div>
  );
}
