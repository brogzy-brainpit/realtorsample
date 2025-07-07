import React from 'react'
import "../globals.css"

// import { ContactMail, ContactPhone, Email, Instagram, LocationCity, LocationOn, PhoneAndroid, WhatsApp, X } from '@mui/icons-material'
import nodemailer from "nodemailer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { base } from '../../../axios'
import logo from "../../../public/images/logo.svg"
import { Instagram, LocationEdit, Mail, Phone, Twitter, X } from 'lucide-react';
export const metadata = {
  title:{
    default: "contact cole payton baker",   
    template:"%s - cole's contact"
  },
  description: "Feel free to reach out through contact form or find my contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to your business.",
   openGraph: {
         title:"contact cole baker",
         description:"contact me through my socials and lets figure out how we can solve your content issues",
         url:`${base}/contact`,
         images: [{url:logo.src}],
         // images: [{url: `open-graph/?slug=${slug}`}],
         type: "website",
       },
      //  twitter: {
      //    card: "summary_large_image",
      //    site: "@bok_cheza",
      //    title:"contact Memet Oumar",
      //    description:"contact me through my socials and lets figure out how we can solve your email issues",
      //    images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png',width:1200,height:630,alt:`image for memet logo`}],
      //  },
};
function ContactPage() {
let sent=false;
async function submit(formData){
  "use server"
  const name=formData.get("name")
  const email=formData.get("email")
  const message=formData.get("message")
  const WebsiteOwnerEmail='dangabarin2020@gmail.com'

 try {
    let config= {
        host:"smtp.gmail.com",
        port: 465,
        secure: true, // use SSL  
         auth:{  
                user:'dangabarin2020@gmail.com',
                pass:"yabccxpsciuoynqs"
            }, 
            
             
      } 
    const mail_config={
        from :`${name} <${email}>`,
        to:WebsiteOwnerEmail,
        replyTo:email,
        subject: 'client reaching out from website!!!',
        text: message,
      }
      let transport =nodemailer.createTransport(config)
     // Send the message using the previously set up Nodemailer transport
     transport.sendMail(mail_config, (err, info) => {
      if (err) {
   return toast.error("something went wrong sending email!!!",{style:{fontFamily:"Poppins"}}) 
      }
     
      console.log('Delivered message %s', info);
      sent=true;
      return toast.success("email sent successfully",{style:{fontFamily:"Poppins"}})
  }) 
    
 } catch (error) {
  // console.log('something went wrong sending email!!!', error);

  //  return toast.error("something went wrong sending email!!!",{style:{fontFamily:"Poppins"}}) 
 }
    
  
  
}
  return (
    <div className='hero-sectio bg-[#000]' style={{padding:"100px 0px"}}>
      <ToastContainer/>
      <div className='container mx-auto'>
      <div>
        <p className='t-large mb-4 capitalize font-custom ' style={{color:"#ffffff"}}>
          Send me a message💌</p>
        <p className='py-2 font-normal'>
        Feel free to reach out through contact form or find my contact information 
        below. Your feedback, questions, and suggestions are important to
         me as i strive to provide exceptional content development services to your business.
        </p>
        <div>
        <svg width="0" height="0">
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#0F79A7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1DB5D0", stopOpacity: 1 }} />
                </linearGradient>
            </svg>

          
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Phone style={{ fill: "url(#gradient1)"}}/>
            </p>
            
            <Link href="tel:+2349063260237">
            +1 (574) 527-6228
            </Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Mail style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="mailto:memetoumar@gmail.com">
            colepaytonbaker@gmail.com
            </Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Phone sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="" target='_blank'>Chat on WhatsApp</Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Instagram  style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="" target='_blank'>Chat on Instagram</Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Twitter style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="" target='_blank'>
            Chat on twitter</Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p  className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <LocationEdit sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
           
Monaco Street, Denver, CO United States of America
            </div>
        </div>
      </div>
      <form action={submit} style={{margin:"auto",marginTop:"2.5rem"}} className=' form-control bg-[#262626] p-4 justify-center rounded-lg max-w-screen-sm md:w-[90%]'>
        <input className='input my-4 font-normal text-[#000000]' type='email' placeholder='your email' name='email' required/>
        <input className='input my-4 font-normal text-[#000000]' type='name' placeholder="what's your name" name='name'/>

        {/* <div className='flex gap-1 justify-center items-center'>
        <input className='input m-4' type='name' placeholder="what's your name" name='name'/>
        </div> */}
        <textarea  className='textarea my-4 font-normal min-h-[200px] max-h-[400px] text-[#000000]' placeholder='enter your message here' name='message' required/>
           {sent &&(
           <p className='bg-green-500 p-2 font-normal text-[12px] rounded-md'>email sent successfully</p>
           )}
           <button type='submit' className='btn custom-btn rounded-full my-2 text-stone-100' style={{width:"auto"}}>submit</button>    
      </form>
      </div>
    </div>
  )
}

export default ContactPage