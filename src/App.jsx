import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos'; import 'aos/dist/aos.css';
import Navbar from './components/Navbar'; import Footer from './components/Footer';
import Home from './pages/Home'; import About from './pages/About'; import Skills from './pages/Skills';
import Projects from './pages/Projects'; import Resume from './pages/Resume'; import Contact from './pages/Contact';
export default function App(){ useEffect(()=>{AOS.init({duration:800,once:true})},[]); return (<BrowserRouter><div className='min-h-screen flex flex-col'><Navbar/><main className='flex-1'><Routes><Route path='/' element={<Home/>}/><Route path='/about' element={<About/>}/><Route path='/skills' element={<Skills/>}/><Route path='/projects' element={<Projects/>}/><Route path='/resume' element={<Resume/>}/><Route path='/contact' element={<Contact/>}/><Route path='*' element={<div className='p-8'><h2>404 — Page not found</h2></div>}/></Routes></main><Footer/></div></BrowserRouter>)}