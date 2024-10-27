import { FaGithub, FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='p-5 flex justify-between items-center flex-wrap bg-black text-white text-base'>
        <div>jafarscript</div>
        <div className="flex items-center gap-4">
        <a href="https://github.com/Jafarscript">
          <FaGithub  />
        </a>
        <a href="https://www.linkedin.com/in/jafar-li-hammed-8817a91b4/">
          <FaLinkedin  />
        </a>
        <a href="https://web.facebook.com/jafar.olamide">
          <FaFacebookF  />
        </a>
        <a href="https://www.linkedin.com/in/jafar-li-hammed-8817a91b4/">
          <FaTwitter  />
        </a>
      </div>
    </div>
  )
}

export default Footer