import { AppConfig } from '../utils/AppConfig';
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link';

const Footer = () => (
  <div className="w-full antialiased">
    <div className="grid py-8 text-sm text-center text-gray-200">
      <div className="mx-auto my-2">
        <Link href="https://github.com/Awaddd">
          <span className="cursor-pointer"><FiGithub /></span>
        </Link>
      </div>
      <span>{AppConfig.title} © {new Date().getFullYear()} </span>
    </div>
  </div>
);

export default Footer;


