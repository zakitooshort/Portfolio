import React from 'react';
import SidePanel from "./SidePanel";
import ProgressBar from './ProgressBar';
import MobileNavbar from "./MobileNavbar";

export default function Goals() {
  const mainGoalProgress = 50; 
  const miniGoalProgress = 50; 

  return (
    <>   
      <div className="@[800px]:divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414] @container">
      <aside className="hidden @[800px]:block sticky w-1/5 text-white space--4 top-0 h-100% sidepanel ">
      <SidePanel/></aside>
      <nav className="block @[800px]:hidden">
        <MobileNavbar />
      </nav>
        <main className="flex-1 space-6 text-white overflow-y-auto p-10">
          <div className="@container">
          <div className="@[600px]:text-[20px] @[700px]:text-[25px] @[900px]:text-3xl @[1000px]:text-4xl font-semibold mb-4">My Goals</div>
          <div className="flex-grow @[300px]:border-t-[1px] @[900px]:border-t-[2px] @[1000px]:border-t-[3px]  mb-4"></div>
          
          <div className="mb-10">
            <h2 className="@[600px]:text-[17px] @[700px]:text-[22px] @[900px]:text-2xl @[1000px]:text-3xl font-semibold mb-4">Main Goals</h2>
            <div className="bg-[#242424] p-4 rounded-lg shadow-lg space-y-2">
              <p className='@[600px]:text-[14px] @[700px]:text-[19px] @[900px]:text-xl @[1000px]:text-2xl font-semibold'>Make at least 1 project a month:</p>
              <p className='@[600px]:text-[11px] @[700px]:text-[16px] @[900px]:text-lg @[1000px]:text-xl'>This Month's Project: Minesweeper game with AI</p>
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>Details: Finished the first half the base game and logic the other half implementing The AI using NEAT technique</p>
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>Deadline: End of the month</p>
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>Milestones: 
                <ul className="list-disc list-inside ml-4">
                  <li>Complete base game logic (Done)</li>
                  <li>Implement AI using NEAT technique (Not yet)</li>
                  <li>Test and debug (Not yet)</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="@[600px]:text-[17px] @[700px]:text-[22px] @[900px]:text-2xl @[1000px]:text-3xl font-semibold mb-4">Mini Goals</h2>
            <div className="bg-[#242424] p-4 rounded-lg shadow-lg space-y-2">
              <p className='@[600px]:text-[14px] @[700px]:text-[19px] @[900px]:text-xl @[1000px]:text-2xl font-semibold'>Make 2 Mini projects a month:</p>
              <p className='@[600px]:text-[11px] @[700px]:text-[16px] @[900px]:text-lg @[1000px]:text-xl'>Mini Project 1: Portfolio</p>
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>Details: Finished the necessary parts might upgrade existing features/ add more features in the Future</p>
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>Deadline: Done</p>
              <div className="flex-grow border-t-[3px] mb-4"></div>
              <p className='@[600px]:text-[11px] @[700px]:text-[16px] @[900px]:text-lg @[1000px]:text-xl'>Mini Project 2: Materials management system for oil projects</p>
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>Details: Mini Project for my internship at ENGTP haven't started building the app in the process of doing the studies</p>
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>Deadline: End of the month</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="@[600px]:text-[17px] @[700px]:text-[22px] @[900px]:text-2xl @[1000px]:text-3xl font-semibold mb-4">Progress</h2>
            <div className="bg-[#242424] p-4 rounded-lg shadow-lg">
              <ProgressBar label="Main Goal Progress" percentage={mainGoalProgress} />
              <ProgressBar label="Mini Goal Progress" percentage={miniGoalProgress} />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="@[600px]:text-[17px] @[700px]:text-[22px] @[900px]:text-2xl @[1000px]:text-3xl font-semibold mb-4">Achievements</h2>
            <div className="bg-[#242424] p-4 rounded-lg shadow-lg space-y-2">
              <p className='@[600px]:text-[11px] @[700px]:text-[16px] @[900px]:text-lg @[1000px]:text-xl'>Completed Projects:</p>
              <ul className="list-disc list-inside ml-4 @[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg">
                <li cl>Portfolio.</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="@[600px]:text-[17px] @[700px]:text-[22px] @[900px]:text-2xl @[1000px]:text-3xl font-semibold mb-4">Motivational Quotes</h2>
            <div className="bg-[#242424] p-4 rounded-lg shadow-lg space-y-2">
              <p className='@[600px]:text-[11px] @[700px]:text-[16px] @[900px]:text-lg @[1000px]:text-xl italic'>"Our work is never over." - Kanye west</p>
              <p className='@[600px]:text-[11px] @[700px]:text-[16px] @[900px]:text-lg @[1000px]:text-xl italic'>"Life is really simple, but we insist on making it complicated." - Confucius</p>
              
            </div>
          </div>

          <div className="mb-10">
            <h2 className="@[600px]:text-[17px] @[700px]:text-[22px] @[900px]:text-2xl @[1000px]:text-3xl font-semibold mb-4">Notes</h2>
            <div className="bg-[#242424] p-4 rounded-lg shadow-lg space-y-2">
              <p className='@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg opacity-70'>The journey ahead is still rough; this is just the beginning. <br />
                Every challenge I'll face is an opportunity to grow stronger and wiser. <br />
                I'll embrace each moment, learn from every experience, and never lose sight of my dreams. <br />
                My dedication and perseverance will guide me through, <br />
                 and I will continue to strive for excellence in all my endeavors. <br />
              </p>
              
            </div>
          </div>

          </div>
        </main>
      </div>
    </>
  );
}