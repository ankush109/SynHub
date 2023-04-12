import AppBar from '@/components/AppBar'
import Home from '@/components/Home'
import LeftBar from '@/components/LeftBar'
import Rightbar from '@/components/Rightbar'
import React from 'react'

function index() {
  return (
  <div className="">
      <div className="">
        <AppBar />
        <div className="flex flex-row h-[90vh]">
          <LeftBar/>
          <Home />
       <Rightbar/>
        </div>
      </div>
    </div>
  )
}

export default index