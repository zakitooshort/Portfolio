import SidePanel from "./SidePanel";
import MobileNavbar from "./MobileNavbar";
import M from "./assets/M.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import React from "./assets/React.png";
import vuejs from "./assets/vuejs.png";
import postgres from "./assets/postgres.png";
import python from "./assets/python.png";
import Django from "./assets/Django.png";
import angular from "./assets/angular.png";
import astro from "./assets/astro.png";
import next from "./assets/next.png";
import nuxtjs from "./assets/nuxtjs.png";
import solidjs from "./assets/solidjs.png";
import aiohttp from "./assets/aiohttp.png";
import C from "./assets/C.png";
import Cplus from "./assets/Cplus.png";
import Chashtag from "./assets/Chashtag.png";
import rails from "./assets/rails.png";
import RUby from "./assets/RUby.png";
import node from "./assets/node.png";
import flask from "./assets/flask.png";
import fastify from "./assets/fastify.png";
import assembly from "./assets/assembly.png";
import express from "./assets/express.png";
import fastapi from "./assets/fastapi.png";
import flutter from "./assets/flutter.png";
import go from "./assets/go.png";
import java from "./assets/java.png";
import koa from "./assets/koa.png";
import laravel from "./assets/laravel.png";
import nest from "./assets/nest.png";
import netcore from "./assets/netcore.png";
import php from "./assets/php.png";
import preact from "./assets/preact.png";
import qwik from "./assets/qwik.png";
import reactnative from "./assets/reactnative.png";
import rust from "./assets/rust.png";
import springboot from "./assets/springboot.png";
import svelte from "./assets/svelte.png";
import quarkus from "./assets/quarkus.png";
import lua from "./assets/lua.png";
import typescript from "./assets/typescript.png";
import jquery from "./assets/jquery.png";
import gin from "./assets/gin.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import mongo from "./assets/mongo.png";
import figma from "./assets/figma.png";
import lock from "./assets/lock.png";


export default function Skills() {
  return (
    <>   
    <div className="@[800px]:divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414] @container">
    <aside className="hidden @[800px]:block sticky w-1/5 text-white space--4 top-0 h-100% sidepanelmother ">
    <SidePanel/></aside>
    <nav className="block @[800px]:hidden">
        <MobileNavbar />
      </nav>
      <main className="list flex-1 space-6 text-white overflow-y-auto ">
      
          <div class="text-center text-semibold  m-4 @[200px]:text-[20px] @[700px]:text-[25px] @[900px]:text-3xl @[1000px]:text-4xl">SKILLS</div>
          <hr className="mt-2 mb-2"/>
          <div class="text-semibold ml-2 @[200px]:ml-10 @[700px]:ml-20 m-4 @[200px]:text-[17px] @[700px]:text-[22px] @[900px]:text-2xl @[1050px]:text-3xl">Languages,Frameworks,Programs acquired / Seek to acquire:</div>
          
          
        <div className=" flex flex-wrap pl-8 @[700px]:pl-10 ">  
        <div className="skill relative  ml-6 @[600px]:ml-10 m-6 w-[11vh] h-[11vh] ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> 
              <img src={html} alt="html" className="absolute z-0 h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
              
            </div>
           <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> 
              <img src={css} alt="css" className="relative h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
            </div>                             
            
            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={javascript} alt="" className="relative h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={React} alt="" className="relative h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={vuejs} alt="" className="relative h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={postgres} alt="" className="relative h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={python} alt="" className="relative h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={Django} alt="" className="relative h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" /></div>
  
            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={github} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             </div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={git} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             </div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={figma} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             </div>
            
             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={typescript} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             </div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={flask} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             </div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div>
             <img src={angular} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={astro} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={next} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={nuxtjs} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
             <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={jquery} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>
             
            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={svelte} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

             
            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={preact} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={quarkus} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={solidjs} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={aiohttp} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={java} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={springboot} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={C} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={Cplus} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={Chashtag} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>
             
            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={assembly} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={rails} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={RUby} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={node} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={express} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={nest} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>
             
            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={koa} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
             <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={qwik} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={fastify} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={fastapi} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={flutter} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
             <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={reactnative} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
              <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={go} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

             <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={gin} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>


            

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={netcore} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={php} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>
             
            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={laravel} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>


            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={rust} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>


            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div> <img src={mongo} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

            

            <div className="skill relative w-[11vh] h-[11vh]  ml-6 @[600px]:ml-10 m-6 ">
            <div className="absolute inset-0 bg-[#fff] blur-md"></div>
             <img src={lua} alt="" className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3" />
             <img src={lock} alt="" className="absolute z-10" /></div>

        </div>
        <div class="text-center text-semibold  m-4 @[200px]:text-[20px] @[700px]:text-[25px] @[900px]:text-3xl @[1000px]:text-4xl">
          Soft Skills:
        </div>
        <ul className="mt-6 ml-[3vh] mr-[8vh] @[700px]:ml-[11vh] text-[20px] @[500px]:text-[22px] @[700px]:text-[24px] @[900px]:text-[26px] space-y-2  @[700px]:mr-[18vh] ">
          <li><strong>Problem-Solving:</strong> I enjoy tackling complex problems , identify challenges, analyze root causes, and develop effective solutions.</li>
          <li><strong>User-Centered Design:</strong> I conduct in-depth user research, including interviews, surveys, and usability testing, to understand user needs and behaviors.</li>
          <li><strong>Communication:</strong> I excel at communicating complex ideas in a simple and understandable way and on the other hand I’m skilled at active listening, which helps me understand client needs or my colleagues and provide tailored solutions.</li>
          <li><strong>Teamwork and Collaboration:</strong> I thrive in collaborative environments I’m also comfortable using collaboration tools like Slack, Trello, and Google Workspace to keep teams organized and connected.</li>
          <li><strong>Adaptability:</strong> Being flexible and open to change, especially in dynamic or uncertain environments as i try to get as comfortable and familiar with any enviroment i get into to fully connect with my colleagues.</li>
          <li><strong>Time Management:</strong> I prioritize tasks based on urgency and importance, ensuring that critical deliverables are always completed on time.</li>
          <li><strong>Emotional Intelligence:</strong> I’m skilled at reading non-verbal cues and adjusting my communication style to connect with different personalities.</li>
        </ul>
      </main>
    </div>
   </>
  )
}