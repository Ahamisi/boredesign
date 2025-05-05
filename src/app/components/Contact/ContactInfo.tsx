import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactInfo() {
  return (
    <div className="w-full md:w-1/2 bg-[#053B6E] text-white rounded-lg p-8 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">We Are Ready to Help</h1>
      
      <p className="mb-10 text-white/90">
        Let&apos;s discuss how BOProperties can help you achieve your Real Estate goal. 
        Whether you&apos;re interested in our Real Estate Management, you want to sell a 
        property and many more, we&apos;re here to help
      </p>
      
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z" stroke="white" strokeWidth="1.5"/>
              <path d="M12 21C16 17 20 13.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 13.4183 8 17 12 21Z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-lg">Visit US</h3>
            <p className="text-white/80">19 Funmilayo Onaronke Akoka, Yaba, Lagos</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-lg">Write to us</h3>
            <Link href="mailto:bopropertiesng@gmail.com" className="text-white/80 hover:text-white underline">
              bopropertiesng@gmail.com
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9995 19.1864V16.4767C21.0156 16.0337 20.8834 15.5981 20.6171 15.2321C19.8404 14.2887 16.9673 13.5968 15.8032 13.4502M13.5966 3.90784C14.2964 3.29999 15.2149 3.0208 16.1306 3.14583C17.0464 3.27085 17.8487 3.78825 18.3223 4.56147M13.5966 3.90784C12.9166 4.49585 12.5043 5.3789 12.5043 6.31888C12.5043 7.25886 12.9166 8.14191 13.5966 8.72992L13.5966 3.90784ZM18.3223 4.56147C19.4525 6.21882 19.1254 8.37201 17.5303 9.6554C15.9351 10.9388 13.7452 10.7279 12.4106 9.17331L18.3223 4.56147ZM13.4949 17.7749C13.4949 18.6821 13.087 19.5525 12.3649 20.1402C11.6428 20.7278 10.6743 20.9801 9.74737 20.8332C8.82039 20.6864 8.02799 20.156 7.56643 19.3749M13.4949 17.7749C12.8307 17.1558 12.4382 16.2725 12.4382 15.3473C12.4382 14.422 12.8307 13.5387 13.4949 12.9196L13.4949 17.7749ZM7.56643 19.3749C6.4176 17.7299 6.71521 15.5722 8.29456 14.2691C9.87392 12.966 12.057 13.1538 13.4055 14.7001L7.56643 19.3749Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-lg">Speak to Us</h3>
            <Link href="tel:08147321515" className="text-white/80 hover:text-white">
              08147321515
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="font-medium mb-4">Connect with us on social media</h3>
        <div className="flex gap-3">
          <Link href="#" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 6.875V8.75H14.375C14.5 8.75 14.5625 8.9375 14.5625 9.0625L14.125 10.625C14.125 10.6875 14 10.75 13.9375 10.75H12.5V17.5H10V10.75H8.75C8.625 10.75 8.5625 10.6875 8.5625 10.5625V9.0625C8.5625 8.9375 8.625 8.875 8.75 8.875H10V6.625C10 5.125 11 3.75 12.5 3.75H14.375C14.5 3.75 14.5625 3.8125 14.5625 3.9375V5.6875C14.5625 5.8125 14.5 5.875 14.375 5.875H12.8125C12.625 5.875 12.5 6 12.5 6.875Z" fill="white"/>
            </svg>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6.875C8.25 6.875 6.875 8.3125 6.875 10C6.875 11.75 8.25 13.125 10 13.125C11.6875 13.125 13.125 11.75 13.125 10C13.125 8.3125 11.6875 6.875 10 6.875ZM17.5 10C17.5 8.75 17.5 7.5625 17.4375 6.3125C17.375 4.875 17.0625 3.5625 16 2.5C14.9375 1.4375 13.625 1.125 12.1875 1.0625C10.9375 1 9.75 1 8.5 1C7.25 1 6.0625 1 4.8125 1.0625C3.375 1.125 2.0625 1.4375 1 2.5C-0.0625 3.5625 -0.375 4.875 -0.4375 6.3125C-0.5 7.5625 -0.5 8.75 -0.5 10C-0.5 11.25 -0.5 12.4375 -0.4375 13.6875C-0.375 15.125 -0.0625 16.4375 1 17.5C2.0625 18.5625 3.375 18.875 4.8125 18.9375C6.0625 19 7.25 19 8.5 19C9.75 19 10.9375 19 12.1875 18.9375C13.625 18.875 14.9375 18.5625 16 17.5C17.0625 16.4375 17.375 15.125 17.4375 13.6875C17.5 12.4375 17.5 11.25 17.5 10ZM10 14.5C7.5 14.5 5.5 12.5 5.5 10C5.5 7.5625 7.5 5.5 10 5.5C12.4375 5.5 14.5 7.5625 14.5 10C14.5 12.5 12.4375 14.5 10 14.5ZM14.6875 6.25C14.0625 6.25 13.5625 5.75 13.5625 5.125C13.5625 4.5 14.0625 4 14.6875 4C15.3125 4 15.8125 4.5 15.8125 5.125C15.8125 5.75 15.3125 6.25 14.6875 6.25Z" fill="white"/>
            </svg>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9441 5.92638C17.9568 6.10403 17.9568 6.28173 17.9568 6.45938C17.9568 11.8781 13.8325 18.1218 6.29441 18.1218C3.97207 18.1218 1.81473 17.4492 0 16.2844C0.329961 16.3223 0.64719 16.3351 0.989844 16.3351C2.90605 16.3351 4.67004 15.6877 6.07309 14.5859C4.27109 14.548 2.76648 13.3706 2.24617 11.7548C2.5 11.7927 2.7539 11.8179 3.02051 11.8179C3.38832 11.8179 3.75613 11.7674 4.09883 11.6788C2.22102 11.2984 0.812539 9.63201 0.812539 7.6141V7.56359C1.35813 7.86802 1.97727 8.05836 2.63359 8.08359C1.54395 7.37304 0.837695 6.13046 0.837695 4.7274C0.837695 3.99173 1.04043 3.31888 1.3957 2.73697C3.40078 5.20322 6.44094 6.80357 9.84766 6.9813C9.78398 6.67693 9.74617 6.35986 9.74617 6.04279C9.74617 3.79654 11.5736 1.95685 13.8451 1.95685C15.0232 1.95685 16.0748 2.46447 16.8141 3.29173C17.7268 3.11404 18.6016 2.7841 19.3789 2.32693C19.0736 3.25415 18.4166 4.04173 17.5674 4.53672C18.3951 4.44896 19.1975 4.22365 19.9369 3.91185C19.379 4.71206 18.6897 5.4226 17.9441 5.92638Z" fill="white"/>
            </svg>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.47926 20H0.330357V6.64732H4.47926V20ZM2.40188 4.82589C1.07545 4.82589 0 3.72411 0 2.39855C9.49017e-09 1.7614 0.252998 1.15014 0.703336 0.701089C1.15367 0.252039 1.7662 0 2.40473 0C3.04326 0 3.65578 0.252039 4.10612 0.701089C4.55646 1.15014 4.80946 1.7614 4.80946 2.39855C4.80946 3.72411 3.73402 4.82589 2.40188 4.82589ZM19.9955 20H15.858V13.5C15.858 11.9502 15.8268 9.96429 13.7056 9.96429C11.5531 9.96429 11.2229 11.6473 11.2229 13.3884V20H7.08169V6.64732H11.0509V8.46875H11.1105C11.6624 7.42188 12.9929 6.31696 14.9501 6.31696C19.1487 6.31696 20 9.07589 20 12.6652V20H19.9955Z" fill="white"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 