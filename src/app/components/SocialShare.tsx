"use client";

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
  } from 'next-share'
  
  export default function SocialShare() {
    // const url = 'https://www.subhrasekhar.in'
    // const title = 'Check out new story 🚀'
    // need to add current url and titles
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = document.title || 'Subhra Sekhar Mukherjee - Full Stack Developer';

    return (
      <div className="flex gap-3">
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={20} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={20} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={20} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={20} round />
        </WhatsappShareButton>
      </div>
    )
  }
  