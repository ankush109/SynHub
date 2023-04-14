import React, { FC } from 'react'

const  PostCard :FC<any>=({
    logo
}) =>{
  return (
            <div className="flex my-8 bg-zinc-700 rounded-xl h-1/2 flex-col mx-20">
              <div className='flex items-center'>
                <img
                className=" my-10 mx-5 w-10 h-10 rounded-xl"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/323871600_892778521853988_6150767426817074706_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=W1snVqUjgBIAX85f965&_nc_ht=scontent.fccu3-1.fna&oh=00_AfAw4kZ7hbXVWyboFm5ZEzesyyOGUyOCI6TbEFWsSWY8oA&oe=643C467B"
              />
            <div className='flex flex-col items-center'>
                  <div >
                    <p>Souvik Sen </p>
                  <h2>Kolkata , West Bengal</h2>
                    </div>
                   
            </div>
               <div className='mx-4'>
                    <p className='text-yellow-400'>1 hr ago</p>
                    </div>
              </div>
           <div className='flex flex-col items-center'>
            <div className=' mx-4'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit rem voluptas laboriosam officia natus nemo, qui eveniet, excepturi accusantium illum? Cupiditate amet vel eaque doloribus natus maiores accusamus similique.</h2>
            </div>
            <div className='w-3/5 m-4' >
                <img   className='h-96 w-full' src={logo} alt="logo" />
            </div>
           </div>
          </div>
  )
}

export default PostCard