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
import { useEffect, useState } from 'react';

export default function SocialShare() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('Subhra Sekhar Mukherjee - Full Stack Developer');

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
  }, []);

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
