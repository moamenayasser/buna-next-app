// Internal Imports
import Link from "next/link";
import Image from "next/image";
// Images
import Logo from "/public/images/BUNA-LOGO-black.png";
import LogoW from "/public/images/BUNA-LOGO-white.png";

const BrandSection = ({ trigger }) => {

  return (
    // <div style={{ background: trigger ? "#000" : '#fff', padding: '0 5px' }}>
    <div>
      <Link href="/" style={{ display: "flex" }}>
        <span style={{ display: "flex" }}>
          {trigger ?
            <Image
              src={LogoW}
              alt="Buna Logo"
              width={150}
              height={100}
              priority
              style={{ objectFit: 'contain' }}
            />
            :
            <Image
              src={LogoW}
              alt="Buna Logo"
              width={150}
              height={100}
              priority
              style={{ objectFit: 'contain' }}
            />
          }
        </span>
      </Link>
    </div>
  );
};

export default BrandSection;